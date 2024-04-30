import React from 'react'

function Aboutochi() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '.1' className='bg-zinc-900'>
    <div className=' w-full border-b-[0.5px] border-black'>
        <div className=' About-ochii bg-[#CDEA68] pt-20  pb-16  pl-[5vw] pr-[11vw] rounded-tl-[20px] rounded-tr-[20px]'>
        <h3 className='text-[4vw] leading-[3.5rem] text-black tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h3>
        </div>
    </div>

    {/*This is another section in aboutochii */}
    <div className=' w-full border-b-[0.5px] border-black overflow-hidden'>
    <div className=' About-ochii2 bg-[#CDEA68] pt-4 pb-16  pl-[5vw] pr-[11vw] flex justify-between'> 
    {['What you can expect:', <div> 
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br/><br/>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>, <div>S:<br/> <br/> Instagram <br/> Behance <br/> Facebook <br/>Linkedin</div>].map((item,index)=>{
        return(
            <div>
            <h3 className={`text-black ${index==1 && 'w-screen max-w-[300px] ml-[23vw]'} ${index==2 && 'mt-[6vw]'}`} key={index}>{item}</h3>
            </div>
        ) 
    })}
    </div> 
    </div>

        {/*This is another section in aboutochii */}
        <div className=' w-full'>
        <div className=' About-ochii3 bg-[#CDEA68] pt-4 pb-8  pl-[5vw] pr-[5vw] flex justify-between items-start'> 
        <div className="apprch-wth-btn">
            <h1 className="text-black font-regular text-[4vw]">Our approach:</h1>
            <button className="uppercase border-2 border-black rounded-[50px] px-8 py-2 bg-zinc-900">Read More</button>
        </div>
        <div className="about-img">
            <img className="w-full max-w-[580px] rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"></img>
        </div>
        </div>  
        </div>

    </div>
  )
}

export default Aboutochi