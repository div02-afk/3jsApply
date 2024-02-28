import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SphereModel from "./components/sphere";
import LightModel from "./components/light";
import LaptopModel from "./components/laptop";
import Controls from "./components/controls";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
const Model = (scale) => {
  

  return (
    <div className="canvas-container">
      {/* Light is placed outside the Canvas */}

      <Canvas 
        orthographic={true}
        className="bg-black"
        camera={{ fov: 40, position: [40, 0, 0] ,zoom:80}}  
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* Ambient light for better visibility */}
        <LightModel />
        <ambientLight intensity={10} />
        {/* <pointLight position={[40, 0, 0]} intensity={400} decay={0.5} /> */}
        {/* OrbitControls for user interaction */}
        <Controls/>
        {/* <OrbitControls rotation={[0,10,0]}></OrbitControls> */}
        {/* <LightModel /> */}
        <LaptopModel scale = {scale} />
        <EffectComposer>
          {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
          {/* <Noise opacity={0.5} /> */}
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
         </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Model;
