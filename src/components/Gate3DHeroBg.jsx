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

const MODEL_URL = '/models/gate.glb'

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

    // Combine base target X with gyroscope roll offset
    const targetX = targetXRef.current + (gyroXRef.current || 0)
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
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-dark/80 backdrop-blur-sm z-10 transition-opacity duration-700">
      <div className="w-12 h-12 rounded-full border-2 border-gold border-t-transparent animate-spin mb-3" />
      <p className="text-gold-light text-xs font-sans uppercase tracking-widest">
        Loading 3D Campus Gate...
      </p>
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

  // Floating mobile controller toggle
  const [showMobilePad, setShowMobilePad] = useState(false)
  const [gyroEnabled, setGyroEnabled] = useState(false)
  const repeatIntervalRef = useRef(null)

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
    }
  }

  const handleTouchEnd = () => {
    touchStartRef.current = null
    pinchStartRef.current = null
  }

  /* ── 4. Mobile Floating Controller Actions (Tap & Continuous Hold) ── */
  const startContinuousAction = useCallback((action) => {
    action()
    clearInterval(repeatIntervalRef.current)
    repeatIntervalRef.current = setInterval(() => {
      action()
    }, 80)
  }, [])

  const stopContinuousAction = useCallback(() => {
    clearInterval(repeatIntervalRef.current)
  }, [])

  const shiftTargetLeft = () => {
    targetXRef.current -= 0.4
  }

  const shiftTargetRight = () => {
    targetXRef.current += 0.4
  }

  const zoomCameraIn = () => {
    cameraZRef.current = Math.max(3.5, cameraZRef.current - 0.4)
  }

  const zoomCameraOut = () => {
    cameraZRef.current = Math.min(20.0, cameraZRef.current + 0.4)
  }

  const resetCamera = () => {
    targetXRef.current = CAMERA_CONFIG.initialTarget[0]
    cameraZRef.current = CAMERA_CONFIG.initialPosition[2]
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

      {/* ── 5. Mobile Floating 3D Control Widget (Mobile / Tablet Only) ── */}
      <div className="md:hidden absolute bottom-6 right-4 z-30 flex flex-col items-end gap-2 pointer-events-auto">
        {/* Expandable Control Pad */}
        {showMobilePad ? (
          <div className="bg-forest-dark/90 backdrop-blur-xl border border-gold/40 rounded-2xl p-3 shadow-2xl flex flex-col items-center gap-2.5 animate-scale-up text-white">
            <div className="flex items-center justify-between w-full pb-1 border-b border-white/10 gap-4">
              <span className="text-[11px] font-semibold tracking-wider text-gold flex items-center gap-1.5">
                <Compass size={13} className="text-gold animate-spin-slow" /> 3D Controls
              </span>
              <button
                onClick={() => setShowMobilePad(false)}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close Controls"
              >
                <X size={14} />
              </button>
            </div>

            {/* D-Pad Buttons */}
            <div className="grid grid-cols-3 gap-1.5 items-center justify-items-center my-1">
              {/* Top: Zoom In (ArrowUp equivalent) */}
              <div />
              <button
                onPointerDown={() => startContinuousAction(zoomCameraIn)}
                onPointerUp={stopContinuousAction}
                onPointerLeave={stopContinuousAction}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-forest active:scale-95 border border-white/15 flex flex-col items-center justify-center transition-all shadow-md"
                title="Zoom In"
              >
                <ChevronUp size={18} />
              </button>
              <div />

              {/* Left: Target X - (Shift+R equivalent) */}
              <button
                onPointerDown={() => startContinuousAction(shiftTargetLeft)}
                onPointerUp={stopContinuousAction}
                onPointerLeave={stopContinuousAction}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-forest active:scale-95 border border-white/15 flex items-center justify-center transition-all shadow-md"
                title="Pan Left"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Center: Reset Button */}
              <button
                onClick={resetCamera}
                className="w-10 h-10 rounded-xl bg-gold/20 hover:bg-gold hover:text-forest text-gold active:scale-95 border border-gold/40 flex items-center justify-center transition-all shadow-md"
                title="Reset View"
              >
                <RotateCcw size={15} />
              </button>

              {/* Right: Target X + (R equivalent) */}
              <button
                onPointerDown={() => startContinuousAction(shiftTargetRight)}
                onPointerUp={stopContinuousAction}
                onPointerLeave={stopContinuousAction}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-forest active:scale-95 border border-white/15 flex items-center justify-center transition-all shadow-md"
                title="Pan Right"
              >
                <ChevronRight size={18} />
              </button>

              {/* Bottom: Zoom Out (ArrowDown equivalent) */}
              <div />
              <button
                onPointerDown={() => startContinuousAction(zoomCameraOut)}
                onPointerUp={stopContinuousAction}
                onPointerLeave={stopContinuousAction}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-forest active:scale-95 border border-white/15 flex flex-col items-center justify-center transition-all shadow-md"
                title="Zoom Out"
              >
                <ChevronDown size={18} />
              </button>
              <div />
            </div>

            {/* Gesture Hint */}
            <div className="text-[9px] text-white/60 font-sans text-center border-t border-white/10 pt-1.5 w-full flex items-center justify-center gap-1">
              <Smartphone size={10} className="text-gold" />
              <span>Swipe: Pan • Pinch: Zoom{gyroEnabled ? ' • Tilt: 3D' : ''}</span>
            </div>
          </div>
        ) : (
          /* Floating Pill Toggle Button */
          <button
            onClick={() => setShowMobilePad(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-forest-dark/85 backdrop-blur-md border border-gold/40 text-gold-light rounded-full text-xs font-semibold shadow-xl hover:bg-forest-dark active:scale-95 transition-all"
          >
            <Compass size={14} className="text-gold animate-spin-slow" />
            <span>3D Controls</span>
          </button>
        )}
      </div>
    </div>
  )
}

// Preload the GLTF model for fast initial render
useGLTF.preload(MODEL_URL)
