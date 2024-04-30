import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed= '-.5' className='w-full pt-1 '>
      <div className="mt-36 pl-[5vw] pr-[5vw]">
      <div className ={`landing-page-cnt pb-40 `}>
     {['WE Create', 'EYE-OPENING', 'PRESENTATIONS'].map((item,index) => {
      return(
        <div className='masker w-fit flex overflow-hidden items-end'>
          {index==1 && 
          [<motion.div initial={{width: '0'}} animate={{width: '6vw'}} transition={{ease : [0.76, 0, 0.24, 1], duration: 0.9  }}        className="w-[6vw] h-[3.5vw] relative  mr-[1vw] "><img className='relative -top-[0.4vw] rounded-md' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img> </motion.div>]}

      <h1 className ={`leading-[0.9em] text-[5vw] font-semibold uppercase font-[FoundersGroteskCondensed]`} key={index}>{item}</h1>
      </div> 
      )
})}
     </div>
     </div>
     <div className='3-div w-full border-t-2 pt-3 '>
      <div className= 'content-wth-btn flex justify-between items-center text-[1.3vw] pl-[5vw] pr-[5vw]'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item,index)=>{
          return(
            <p classNmae='' key={index}>{item}</p>
          )
})}
     <button className='uppercase border-2 rounded-[2vw] px-4 py-1 text-[1.2vw] '>Start The Project</button>
      </div>
      
     </div>
   </div>
  )
}

export default Landingpage