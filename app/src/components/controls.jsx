import { OrbitControls } from "@react-three/drei";
import React,{ useEffect } from "react";
import * as THREE from "three";
import { useThree ,useFrame} from "@react-three/fiber";

export default function Controls() {
    const { camera } = useThree();

    useFrame(() => {
        camera.position.lerp(new THREE.Vector3(40, 0, 2), 0.1);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        camera.updateProjectionMatrix();
      });

    return (
      <>
        <OrbitControls
          camera={camera}
          enableZoom={false}
        //   onEnd={() => camera.position.set(40, 0, 0)}
        />
      </>
    );
}