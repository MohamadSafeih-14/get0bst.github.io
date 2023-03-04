import React, { useEffect, useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Routes, Route, Outlet, RouterProvider, Link} from 'react-router-dom';
import '../App.css'
const Header = ({ navColor }) => {
  // const [neColor, setNeColor] = useState("");
  // const header = document.querySelector("header");
  //   if (navColor === "black") {
  //     setNeColor(navColor)
  //     header.style.backgroundColor = {neColor};
  //   } else if (navColor === "blue"){
  //     setNeColor(navColor)
  //     header.style.backgroundColor = {neColor};

  //   }
  return (
    <header id="header" className=" fixed">
      <nav className=" flex justify-between pt-4 ">
      <div className='text-white'>
      Gow
      </div>
        <ul className='flex list'>
        <Link className='link-hr' to={"/"}>Home</Link>
          <li><a className=' ' href="https://discord.gg/KwuUsyEEQb">Discord</a></li>
          <Link className='link-hr' to={"/Boosting"}>Get Boosted</Link>
          <Link className='link-hr' to={"/Contact"}>Contact Us</Link>
          <Link className='link-hr' to={"/jobs"}>Jobs</Link>
          <Link className='link-hr' to={"/FAQ"}>FAQ</Link>
        </ul>
        <div className='text-white'>
        Sign Up
      </div>
      </nav>
    </header>
  )
}

export default Header
