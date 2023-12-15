import {Box,OrbitControls} from "@react-three/drei";
import {useRef} from "react";
import { useFrame } from "@react-three/fiber";

export default function LightModel() {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation._y += 5;
      });
    return(
        <>
        
        <pointLight position={[100, 0, 0]} intensity = {400} ref = {ref}/>
      </>
    )
}