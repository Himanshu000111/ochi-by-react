import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed= '-.2' className='Marquee w-full bg-zinc-900 inline-block font-[FoundersGroteskX-CondensedBold] pt-[3vw]  '>
      <div className=' txt-main py-10  bg-[#004D43] rounded-tl-[20px] rounded-tr-[20px] '>
        <div  className='text border-t-2 border-b-2 flex  leading-none whitespace-nowrap overflow-hidden  ' >
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{ease: 'linear', duration: 10, repeat: Infinity}} className='text-[20vw] -tracking-[1rem] pr-2'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{ease: 'linear', duration: 10, repeat: Infinity}} className='text-[20vw] -tracking-[1rem]'>We are Ochi</motion.h1>     
        </div>
        </div>
    </div>
  )
}

export default Marquee