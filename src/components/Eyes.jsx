import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)
useEffect(()=>{
        window.addEventListener('mousemove', function(e){
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2
        let deltaY = mouseY - window.innerHeight/2

        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180);
})})
  return (
    <div className='w-full h-screen overflow-hidden' >
    <div data-scroll data-scroll-section data-scroll-speed = '-.6' className=' relative w-full h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center overflow-hidden flex justify-center items-center'>
        <div className='absolute flex gap-10'>
            <div className=' flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                <div className=' flex justify-center items-center w-[11vw] h-[11vw] rounded-full bg-zinc-900 overflow-hidden'>
                    <div style= {{transform: ` rotate(${rotate}deg) `}}  className={`line  w-full h-[2vw] `}>
                        <div className='w-[2vw] h-[2vw] rounded-full bg-zinc-100'>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
            <div className='flex justify-center items-center w-[11vw] h-[11vw] rounded-full bg-zinc-900'>
            <div  style= {{transform: `rotate(${rotate}deg)`}} className='line w-[11vw] h-[2vw]'>
                        <div className='w-[2vw] h-[2vw] rounded-full bg-zinc-100'></div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    </div>
  )
}

export default Eyes