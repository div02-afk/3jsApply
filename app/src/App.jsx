import { useState,useEffect } from 'react'
import Model from './3dmodel'
import './App.css'
import 'animate.css';

function App() {
  const [scale,setScale] = useState(7);
  const [position,setPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const newscale = (window.scrollY*40)/670 + 7;
      const positionX = (window.scrollY*30)/670 ; 
      console.log((window.scrollY));
      setScale(newscale);
      setPosition(positionX);
      // console.log(scale)
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scale]);

  return(
    <>
    <div className='bg-transparent h-screen w-screen'>
      <h1 className='mt-10 font-mono  text-center text-white text-5xl opacity-0 animate__animated animate__fadeIn animate__delay-1s bg-transparent  border-solid  rounded-lg'>Welcome</h1>
      <div className='fixed'>
      <Model scale = {scale} position = {position} />
      </div>
      </div> 
      <div className='bg-black h-60 w-screen'></div>
      {/* <img src = "https://imgs.search.brave.com/WV7rY9PAv2Q6yVYGbfl2j46rhkDbf_F0ngc3c1Op9OI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGFwdG9wLWZyb20t/YWJvdmUuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA" height={1700} width={1700}/> */}
    </>
  )
}

export default App
