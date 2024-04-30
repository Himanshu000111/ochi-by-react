import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Crds1({frstcardtxt, scndcardtxt, frstcardimg, scndcardimg}) {

  const cards = [useAnimation(), useAnimation()];
  const handelhoverstart = (index)=>{
    cards[index].start({
        y: '0'
    })
  }

  const handelhoverend = (index)=>{
    cards[index].start({
        y: '100%'
    })
  }


  return (
    <div className='main w-full bg-zinc-900  '>
          <div className='containe-2 w-full relative px-[5vw]'>
    <div className='1st-card-text flex justify-between  pt-[3vw] pb-[2vw]'>
        <div className='flex items-center gap-1'>
        <div className='gola w-2 h-2 bg-white rounded-full relative '></div>
        <div className='text-[1.2vw]'>{frstcardtxt}</div>
        </div>
        <div className='flex items-center gap-1'>
        <div className='gola w-2 h-2 bg-white rounded-full relative '></div>
        <div className='text-[1.2vw]'>{scndcardtxt}</div>
        </div>
    </div>
    </div>

    <div className='cards flex justify-center items-center gap-10 relative px-[5vw] '>

    <motion.div onHoverStart={()=>handelhoverstart(0)} onHoverEnd={()=> handelhoverend(0)} className='cards-container relative w-1/2 '>
        <img className='rounded-xl' src={frstcardimg}></img>
        <div style={{ width:'100%', margin: '0, auto', maxWidth: 'max-content'}} className='flex absolute top-1/2 left-full  z-10 overflow-hidden '> 
            <h1 className=' text-[5vw] tracking-tighter text-[#CDEA68] font-[bold]'>{frstcardtxt.split("").map((item,index)=>          (<motion.span  initial={{y:'100%'}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06 }} className='inline-block' >{item}</motion.span>))}</h1> 
        </div>
    </motion.div>

    <motion.div onHoverStart={()=> handelhoverstart(1)} onHoverEnd={()=> handelhoverend(1)} className='cards-container relative z-1 w-1/2'>
        <img className='rounded-xl' src={scndcardimg}></img>
        <div style={{ width:'100%', margin: '0, auto', maxWidth: 'max-content'}} className='absolute top-1/2 right-full z-10 overflow-hidden flex'> 
            <h1 className='text-[5vw] tracking-tighter font-[bold] text-[#CDEA68]'> {scndcardtxt.split("").map((item,index)=> (<motion.span initial= {{y: '100%'}} animate= {cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className='inline-block'>{item}</motion.span>))} </h1>
            </div>
        </motion.div>

    </div>
    </div>
  )
}

export default Crds1