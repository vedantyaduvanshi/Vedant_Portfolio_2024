import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import React, { useRef } from "react";
import { ToneMappingMode } from "postprocessing";
import WaterSurfaceComplex from './WaterSurface/WaterSurfaceComplex';
import { easing } from 'maath'

export default function Experience() {
  const cameraRef = useRef();
  const orbitControlsRef = useRef();


  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }} >
        <OrbitControls 
          ref={orbitControlsRef}
          enableRotate={false} 
          enablePan={false} 
          enableZoom={false} // Disable zoom for better control
        />
        
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1.5} intensity={0.5} />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>

        <mesh castShadow position-y={-10}>
          <planeGeometry args={[0.7, 20]} />
          <meshBasicMaterial color={[1.6, 1.6, 1.6]} toneMapped={false} />
        </mesh>
        <CameraRig />
        
       
        <WaterSurfaceComplex position={[0, -2, 0]} flowSpeed={0.03}/>
      </Canvas>
    </>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    // Reduce the influence of pointer movement
    const xMovement = (state.pointer.x * state.viewport.width) * 0.15;
    const yMovement = (state.pointer.y * state.viewport.height) * 0.15;

    // Adjust the damping to control the smoothness
    easing.damp3(state.camera.position, [-xMovement, yMovement * 0.5, 5], 0.5, delta);
  });

}
