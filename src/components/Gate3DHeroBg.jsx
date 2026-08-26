import { Suspense, useRef, useLayoutEffect, useEffect, useState, useCallback } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { RotateCcw } from 'lucide-react'
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
  initialPosition: [0.0, 0.0, 24.0], // Starts zoomed completely out
  restingPosition: [0.0, 0.0, 7.5],   // Settled resting position
  initialTarget: [0.0, 0.0, 0.0],
  fov: 45,
}

// Easing utilities for buttery smooth cinematic motion
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3)
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

function GateModel({ position, rotation, scale, animRotationYRef }) {
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

  // Base rotation angles converted from degrees to radians
  const radX = (rotation[0] * Math.PI) / 180
  const radY = (rotation[1] * Math.PI) / 180
  const radZ = (rotation[2] * Math.PI) / 180

  useFrame(() => {
    if (groupRef.current) {
      const extraY = animRotationYRef?.current || 0
      groupRef.current.rotation.y = radY + extraY
    }
  })

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
  mouseXRef,
  animTimeRef,
  animRotationYRef,
  isIntroPlayingRef,
  controlsRef,
}) {
  const { camera } = useThree()

  const currentTargetX = useRef(CAMERA_CONFIG.initialTarget[0])
  const currentCameraZ = useRef(CAMERA_CONFIG.initialPosition[2])

  useFrame((state, delta) => {
    if (isIntroPlayingRef.current) {
      animTimeRef.current += delta
      const t = animTimeRef.current

      let animZ = CAMERA_CONFIG.restingPosition[2]
      let animRotY = 0
      const animTargetX = CAMERA_CONFIG.initialTarget[0]

      if (t < 1.4) {
        // Stage 1: Zoom in from completely zoomed out (24.0) to max close-up (5.2)
        const p = easeOutCubic(t / 1.4)
        animZ = THREE.MathUtils.lerp(24.0, 5.2, p)
        animRotY = 0
      } else if (t < 2.4) {
        // Stage 2: Rotate Right (+27.5 deg = +0.48 rad)
        const p = easeInOutSine((t - 1.4) / 1.0)
        animZ = THREE.MathUtils.lerp(5.2, 6.0, p)
        animRotY = THREE.MathUtils.lerp(0, 0.48, p)
      } else if (t < 3.6) {
        // Stage 3: Rotate Left (-27.5 deg = -0.48 rad)
        const p = easeInOutSine((t - 2.4) / 1.2)
        animZ = THREE.MathUtils.lerp(6.0, 6.8, p)
        animRotY = THREE.MathUtils.lerp(0.48, -0.48, p)
      } else if (t < 4.6) {
        // Stage 4: Rotate to Center (0.0 rad) & smoothly ease camera to standard resting distance (7.5)
        const p = easeInOutSine((t - 3.6) / 1.0)
        animZ = THREE.MathUtils.lerp(6.8, 7.5, p)
        animRotY = THREE.MathUtils.lerp(-0.48, 0, p)
      } else {
        // Intro animation complete - handoff to interactive controls
        isIntroPlayingRef.current = false
        animRotY = 0
        animZ = 7.5
        cameraZRef.current = 7.5
      }

      animRotationYRef.current = animRotY
      currentCameraZ.current = animZ
      camera.position.z = animZ

      if (controlsRef?.current) {
        controlsRef.current.target.set(
          animTargetX,
          CAMERA_CONFIG.initialTarget[1],
          CAMERA_CONFIG.initialTarget[2]
        )
        controlsRef.current.update()
      } else {
        camera.lookAt(
          animTargetX,
          CAMERA_CONFIG.initialTarget[1],
          CAMERA_CONFIG.initialTarget[2]
        )
      }
    } else {
      // ── Post-Intro: Interactive Mode with Butter-Smooth Damping ──
      animRotationYRef.current = THREE.MathUtils.damp(
        animRotationYRef.current,
        0,
        4,
        delta
      )

      // Clamp camera Z between 3.5 and 20.0
      const targetZ = Math.max(3.5, Math.min(20.0, cameraZRef.current))
      currentCameraZ.current = THREE.MathUtils.damp(
        currentCameraZ.current,
        targetZ,
        6,
        delta
      )
      camera.position.z = currentCameraZ.current

      // Mouse parallax offset (-1 to 1 mapped to target horizontal shift)
      const pointerOffsetX = (mouseXRef?.current || 0) * 3.0
      const targetX = targetXRef.current + pointerOffsetX
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
  const cameraZRef = useRef(CAMERA_CONFIG.restingPosition[2])
  const mouseXRef = useRef(0)

  // Intro Animation Tracking
  const animTimeRef = useRef(0)
  const animRotationYRef = useRef(0)
  const isIntroPlayingRef = useRef(true)
  const [, setForceUpdate] = useState(0)

  // Replay animation callback
  const handleReplay = useCallback(() => {
    animTimeRef.current = 0
    animRotationYRef.current = 0
    isIntroPlayingRef.current = true
    targetXRef.current = CAMERA_CONFIG.initialTarget[0]
    cameraZRef.current = CAMERA_CONFIG.restingPosition[2]
    setForceUpdate((prev) => prev + 1)
  }, [])
  
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
        isIntroPlayingRef.current = false
        if (e.shiftKey) {
          targetXRef.current -= 0.5
        } else {
          targetXRef.current += 0.5
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        isIntroPlayingRef.current = false
        cameraZRef.current = Math.max(3.5, cameraZRef.current - 0.5)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        isIntroPlayingRef.current = false
        cameraZRef.current = Math.min(20.0, cameraZRef.current + 0.5)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  /* ── 2. Global Mouse Tracking (Smooth desktop parallax) ── */
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseXRef.current = (e.clientX / window.innerWidth) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  /* ── 3. Touch Swipe & Pinch Handlers on Canvas Container ── */
  const handleTouchStart = (e) => {
    isIntroPlayingRef.current = false
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
      if (zoomInputRef.current) zoomInputRef.current.value = CAMERA_CONFIG.restingPosition[2] - cameraZRef.current
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
          {/* Universal Camera Controller (Handles Intro Animation, Keyboard, Touch, & Parallax) */}
          <UniversalCameraController
            targetXRef={targetXRef}
            cameraZRef={cameraZRef}
            mouseXRef={mouseXRef}
            animTimeRef={animTimeRef}
            animRotationYRef={animRotationYRef}
            isIntroPlayingRef={isIntroPlayingRef}
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

          {/* Animated 3D Gate Model */}
          <GateModel
            position={MODEL_CONFIG.position}
            rotation={MODEL_CONFIG.rotation}
            scale={MODEL_CONFIG.scale}
            animRotationYRef={animRotationYRef}
          />

          {/* Interactive Controls */}
          <OrbitControls
            ref={orbitControlsRef}
            target={CAMERA_CONFIG.initialTarget}
            enableZoom={true}
            enablePan={true}
            autoRotate={false}
            rotateSpeed={0.5}
            onStart={() => {
              isIntroPlayingRef.current = false
            }}
          />
        </Canvas>
      </Suspense>

      {/* Directional scrim overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Replay Animation / Reset View Button */}
      <button
        onClick={handleReplay}
        title="Replay Gate Animation"
        aria-label="Replay Gate Animation"
        className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-forest-dark/80 hover:bg-forest text-gold border border-gold/30 backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 group pointer-events-auto"
      >
        <RotateCcw size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
      </button>

      {/* ── Mobile Edge Sliders (Mobile / Tablet Only) ── */}
      {/* Horizontal Pan Slider */}
      <div className="md:hidden absolute bottom-6 left-6 right-16 z-30 pointer-events-auto flex items-center shadow-lg">
        <input 
          type="range" 
          ref={panInputRef}
          min="-6" 
          max="6" 
          step="0.1"
          defaultValue={0}
          onChange={(e) => { 
            isIntroPlayingRef.current = false
            targetXRef.current = parseFloat(e.target.value) 
          }}
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
          onChange={(e) => { 
            isIntroPlayingRef.current = false
            cameraZRef.current = CAMERA_CONFIG.restingPosition[2] - parseFloat(e.target.value) 
          }}
          className="w-48 h-1.5 bg-white/20 backdrop-blur-md rounded-lg appearance-none cursor-pointer accent-gold border border-white/10"
          style={{ transform: 'rotate(-90deg)' }}
        />
      </div>
    </div>
  )
}

// Preload the GLTF model for fast initial render
useGLTF.preload(MODEL_URL)
