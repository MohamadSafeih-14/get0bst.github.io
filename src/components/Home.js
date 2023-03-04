import Header from './Header'
import Section from './Section'
import Section2 from './Section2'
import React, { useState } from 'react';
import Line from './Line';
import Footer from './Footer';
import '../App.css'
const Home = () => {
 const [navColor, setNavColor] = useState("");
  return (
    <>
    <Section setNavColor={setNavColor}/>
    {/* <Line /> */}
    <Section2 />
    </>
  )
}
 
export default Home
