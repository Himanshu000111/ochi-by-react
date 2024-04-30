import React from 'react'

function Ochic() {
  return (
  <div className='w-full h-screena $E - bg-zinc-900 '>
      <div className='cardscontainer w-full flex gap-5 justify-center items-center h-screen px-[5vw]'>
        <div className='w-1/2'>
          <div className='relative w-full bg-[#004D43] h-[50vh] rounded-xl flex justify-center items-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
            <button className='block absolute left-10 bottom-10 border-2 px-2 py-1 rounded-full border-[#CDEA68] text-[#CDEA68]' >&copy;2019-2022</button>
          </div>
        </div>
        <div className='w-1/2 flex gap-5'>
        <div className=' relative w-1/2 h-[50vh] bg-[#212121] rounded-xl flex justify-center items-center'>
        <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
            <button className='block absolute left-10 bottom-10 border-2 px-2 py-1 rounded-full border-[#ffffff] text-[#ffffff]' >RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative w-1/2 h-[50vh] bg-[#212121] rounded-xl flex justify-center items-center'>
        <img className='w-1/3' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
            <button className='block absolute left-10 bottom-10 border-2 px-2 py-1 rounded-full border-[#ffffff] text-[#ffffff]' >BUISNESS BOOTCAMP ALUMIINI</button>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Ochic