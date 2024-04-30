import React from 'react';
import Nav from './components/Nav'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import Aboutochi from './components/Aboutochi'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects';
import Crds1 from './components/Crds1'
import Ochic from './components/Ochic'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Nav />
      <Landingpage />
      <Marquee className='bg-zinc-900' />
       <Aboutochi />
       <Eyes />
      <FeaturedProjects />
      <Crds1 frstcardtxt="FYDE" scndcardtxt="VISE" frstcardimg="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" scndcardimg="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
      <Crds1 frstcardtxt="TRAWA" scndcardtxt="PREMIUM BLEND" frstcardimg="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" scndcardimg="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" />
      <Ochic />
      <Footer />
    </div>

  )
}

export default App;