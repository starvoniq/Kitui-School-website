import { Suspense, useRef, useLayoutEffect, useEffect, useState, useCallback } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  Compass,
  X,
  Smartphone,
} from 'lucide-react'
import * as THREE from 'three'
import gateModel from '../assets/models/gate.glb'
import { images } from '../assets/images'

const MODEL_URL = gateModel

// Default locked configurations
const MODEL_CONFIG = {
  position: [-4.0, 1.4, 0.0],
  rotation: [0, 0, 0],
  scale: 10.0,
}

const CAMERA_CONFIG = {
  initialPosition: [0.0, 0.0, 7.5],
  initialTarget: [0.0, 0.0, 0.0],
  fov: 45,
}

function GateModel({ position, rotation, scale }) {
  const { scene } = useGLTF(MODEL_URL)
  const groupRef = useRef()

  useLayoutEffect(() => {
    if (!scene) return

    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())

    // Center model geometry at local origin
    scene.position.x = -center.x
    scene.position.y = -center.y
    scene.position.z = -center.z

    // Enable shadows & double-sided material rendering
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.side = THREE.DoubleSide
        }
      }
    })
  }, [scene])

  // Convert rotation angles from degrees to radians
  const radX = (rotation[0] * Math.PI) / 180
  const radY = (rotation[1] * Math.PI) / 180
  const radZ = (rotation[2] * Math.PI) / 180

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={[radX, radY, radZ]}
      scale={[scale, scale, scale]}
    >
      <primitive object={scene} />
    </group>
  )
}

function UniversalCameraController({
  targetXRef,
  cameraZRef,
  gyroXRef,
  gyroZRef,
  mouseXRef,
  controlsRef,
}) {
  const { camera } = useThree()

  const currentTargetX = useRef(CAMERA_CONFIG.initialTarget[0])
  const currentCameraZ = useRef(CAMERA_CONFIG.initialPosition[2])

  useFrame((state, delta) => {
    // Combine base camera Z with gyroscope pitch offset (clamped between 3.5 and 20)
    const targetZ = Math.max(
      3.5,
      Math.min(20.0, cameraZRef.current + (gyroZRef.current || 0))
    )
    currentCameraZ.current = THREE.MathUtils.damp(
      currentCameraZ.current,
      targetZ,
      6,
      delta
    )
    camera.position.z = currentCameraZ.current

    // Combine base target X with gyroscope roll offset and global mouse offset
    // mouseXRef.current ranges from -1 (left) to 1 (right)
    const pointerOffsetX = (mouseXRef?.current || 0) * 3.0
    const targetX = targetXRef.current + (gyroXRef.current || 0) + pointerOffsetX
    currentTargetX.current = THREE.MathUtils.damp(
      currentTargetX.current,
      targetX,
      6,
      delta
    )

    if (controlsRef?.current) {
      controlsRef.current.target.x = currentTargetX.current
      controlsRef.current.target.y = CAMERA_CONFIG.initialTarget[1]
      controlsRef.current.target.z = CAMERA_CONFIG.initialTarget[2]
      controlsRef.current.update()
    } else {
      camera.lookAt(
        currentTargetX.current,
        CAMERA_CONFIG.initialTarget[1],
        CAMERA_CONFIG.initialTarget[2]
      )
    }
  })

  return null
}

function Loader() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 bg-forest-dark">
      <img 
        src={images.gate} 
        alt="Loading Campus Gate" 
        className="absolute inset-0 w-full h-full object-cover animate-pulse opacity-70" 
      />
      <div className="absolute inset-0 bg-forest-dark/60" />
    </div>
  )
}

export default function Gate3DHeroBg() {
  const orbitControlsRef = useRef()

  // State refs for position & target manipulation
  const targetXRef = useRef(CAMERA_CONFIG.initialTarget[0])
  const cameraZRef = useRef(CAMERA_CONFIG.initialPosition[2])
  const gyroXRef = useRef(0)
  const gyroZRef = useRef(0)
  const mouseXRef = useRef(0)

  // Floating mobile controller toggle
  const [gyroEnabled, setGyroEnabled] = useState(false)
  
  // Slider input refs for syncing
  const panInputRef = useRef(null)
  const zoomInputRef = useRef(null)

  // Touch tracking refs
  const touchStartRef = useRef(null)
  const pinchStartRef = useRef(null)

  /* ── 1. Desktop Keyboard Listeners (R / Shift+R, ArrowUp / ArrowDown) ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      if (e.key === 'r' || e.key === 'R') {
        if (e.shiftKey) {
          targetXRef.current -= 0.5
        } else {
          targetXRef.current += 0.5
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        cameraZRef.current = Math.max(3.5, cameraZRef.current - 0.5)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        cameraZRef.current = Math.min(20.0, cameraZRef.current + 0.5)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  /* ── 1.5 Global Mouse Tracking (overrides z-index blocking) ── */
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseXRef.current = (e.clientX / window.innerWidth) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  /* ── 2. Device Gyroscope / Tilt Tracking ── */
  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        setGyroEnabled(true)
        // Gamma is left-to-right tilt in degrees (-90 to 90)
        // Smoothly map ±30 deg tilt to ±3 units on target X
        const clampedGamma = Math.max(-30, Math.min(30, e.gamma))
        gyroXRef.current = (clampedGamma / 30) * 3.0

        // Beta is front-to-back tilt in degrees (-180 to 180, typically 40-70 in hand)
        const normalizedBeta = e.beta - 50
        const clampedBeta = Math.max(-25, Math.min(25, normalizedBeta))
        gyroZRef.current = (clampedBeta / 25) * 1.5
      }
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true)
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true)
      }
    }
  }, [])

  /* ── 3. Touch Swipe & Pinch Handlers on Canvas Container ── */
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        startX: targetXRef.current,
      }
      pinchStartRef.current = null
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      pinchStartRef.current = {
        dist: Math.hypot(dx, dy),
        startZ: cameraZRef.current,
      }
      touchStartRef.current = null
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && touchStartRef.current) {
      const deltaX = e.touches[0].clientX - touchStartRef.current.x
      // Horizontal drag smoothly shifts target X
      targetXRef.current =
        touchStartRef.current.startX - (deltaX / window.innerWidth) * 10
      if (panInputRef.current) panInputRef.current.value = targetXRef.current
    } else if (e.touches.length === 2 && pinchStartRef.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const currentDist = Math.hypot(dx, dy)
      const diff = currentDist - pinchStartRef.current.dist
      // Pinch out decreases Z (zooms in), Pinch in increases Z (zooms out)
      cameraZRef.current = Math.max(
        3.5,
        Math.min(20.0, pinchStartRef.current.startZ - diff * 0.03)
      )
      if (zoomInputRef.current) zoomInputRef.current.value = CAMERA_CONFIG.initialPosition[2] - cameraZRef.current
    }
  }

  const handleTouchEnd = () => {
    touchStartRef.current = null
    pinchStartRef.current = null
  }



  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-forest-dark touch-none select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{
            position: CAMERA_CONFIG.initialPosition,
            fov: CAMERA_CONFIG.fov,
          }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          {/* Universal Camera Controller (handles Keyboard, Touch, & Gyroscope) */}
          <UniversalCameraController
            targetXRef={targetXRef}
            cameraZRef={cameraZRef}
            gyroXRef={gyroXRef}
            gyroZRef={gyroZRef}
            mouseXRef={mouseXRef}
            controlsRef={orbitControlsRef}
          />

          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[51.0, 19.0, 12.0]}
            intensity={2.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight position={[-10, 10, -10]} intensity={0.8} color="#e6f2ff" />
          <hemisphereLight skyColor="#ffffff" groundColor="#1b382b" intensity={0.7} />

          {/* Stationary Model */}
          <GateModel
            position={MODEL_CONFIG.position}
            rotation={MODEL_CONFIG.rotation}
            scale={MODEL_CONFIG.scale}
          />

          {/* Interactive Controls */}
          <OrbitControls
            ref={orbitControlsRef}
            target={CAMERA_CONFIG.initialTarget}
            enableZoom={true}
            enablePan={true}
            autoRotate={false}
            rotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>

      {/* Directional scrim overlays (reduced to 0.5 opacity for enhanced 3D model clarity) */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* ── 5. Mobile Edge Sliders (Mobile / Tablet Only) ── */}
      {/* Horizontal Pan Slider */}
      <div className="md:hidden absolute bottom-6 left-6 right-16 z-30 pointer-events-auto flex items-center shadow-lg">
        <input 
          type="range" 
          ref={panInputRef}
          min="-6" 
          max="6" 
          step="0.1"
          defaultValue={0}
          onChange={(e) => { targetXRef.current = parseFloat(e.target.value) }}
          className="w-full h-1.5 bg-white/20 backdrop-blur-md rounded-lg appearance-none cursor-pointer accent-gold border border-white/10"
        />
      </div>

      {/* Vertical Zoom Slider */}
      <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 h-48 w-8 z-30 pointer-events-auto flex justify-center items-center shadow-lg">
        <input 
          type="range" 
          ref={zoomInputRef}
          min="-6" 
          max="6" 
          step="0.1"
          defaultValue={0}
          onChange={(e) => { cameraZRef.current = CAMERA_CONFIG.initialPosition[2] - parseFloat(e.target.value) }}
          className="w-48 h-1.5 bg-white/20 backdrop-blur-md rounded-lg appearance-none cursor-pointer accent-gold border border-white/10"
          style={{ transform: 'rotate(-90deg)' }}
        />
      </div>
    </div>
  )
}

// Preload the GLTF model for fast initial render
useGLTF.preload(MODEL_URL)
