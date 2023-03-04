import React from 'react';
import '../App.css';
import Faq from './Faq';
import WhyUs from './WhyUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Steps from './Steps';
import stps from "../assets/stps.png"
const Section2 = () => {
  return (
    <section className='section2 bg-neutral-900'>
      <h1 className='h-why text-center text-white text-9xl pt-24'>WHY <span className=' font-semibold  text-green-500'>US</span></h1>     
      <WhyUs />
      <div className='banner-home'>
      <h1>
        How Its Done
      </h1>
      </div>
      <div className='stps-home'>
      <img src={stps}/>
      </div>
    </section>
  )
}

export default Section2
