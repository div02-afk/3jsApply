import {Box,OrbitControls} from "@react-three/drei";
import {useEffect, useRef} from "react";
import { useFrame } from "@react-three/fiber";

export default function SphereModel() {
    const ref = useRef();
   useEffect(() => {
        ref.current.opacity = 0;
        console.log(ref.current.opacity)
   }, [])
   
    useFrame((state, delta) => {
      // if(ref.current.opacity < 1)
        // {ref.current.opacity +=0.0003;}
        // console.log(ref.current.opacity)
        ref.current.rotation.y +=0.03;
      });
    return(
        <>
        <OrbitControls enableZoom = {false} />
        <Box className = "animate__animated animate_bounce delay-2s" args={[1, 5, 5]} position={[-3, 0, 0]} ref={ref}>
        <meshPhongMaterial attach="material" color="white" opacity={0} />
      </Box>
      </>
    )
}