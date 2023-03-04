import React from 'react'
import '../cmpCss/footer.css'
import {createBrowserRouter, createRoutesFromElements, Routes, Route, Outlet, RouterProvider, Link} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
    <div className='top'>
    <div className='logo'>
        GOW Logo
    </div>
    <div className='lists'>
    <ul className='footer-list list-2'>
        <li className='title'>GOW Boosting</li>
        <li className='link-fr'><a>Order Boost</a></li>
        <li className='link-fr'><a>Dashboard</a></li>
    </ul>
    <ul className='footer-list list-1'>
        <li className='title'>GOW Contact</li>
          <Link className='link-fr' to={"/Boosting"}>Get Boosting</Link>
          <Link className='link-fr' to={"/FAQ"}>FAQ</Link>
          <Link className='link-fr' to={"/PrivacyPolicy"}>Privacy Policy</Link>
          <Link className='link-fr' to={"/TermsOfService"}>Terms Of Service</Link>
          <Link className='link-fr' to={"/Contact"}>Contact</Link>
          <Link className='link-fr' to={"/jobs"}>Jobs</Link>
    </ul>
    </div>
    </div>
    <div className='bottom'>
      <FaInstagram className='icn'/>
      <FaDiscord className='icn'/>
    </div>
    <div className='p-ow'>
    <p className='p-footer'>
        LEAGUE OF LEGENDS IS A REGISTERED TRADEMARK OF RIOT GAMES, INC. WE ARE IN NO WAY AFFILIATED WITH, ASSOCIATED WITH OR ENDORSED BY RIOT GAMES, INC. <br />
        BY USING THIS WEBSITE YOU CONSTITUTE ACCEPTANCE TERMS OF SERVICE AND PRIVACY POLICY. ALL COPYRIGHTS, TRADE MARKS, SERVICE MARKS BELONG TO THE CORRESPONDING OWNERS. <br />
        COPYRIGHT OF © gowboost.com 2023 ALL RIGHTS RESERVED
    </p>
    </div>
    </footer>
  )
}

export default Footer
