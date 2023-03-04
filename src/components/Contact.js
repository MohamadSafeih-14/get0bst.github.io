import React from 'react'
import '../cmpCss/contact.css'
import { FaDiscord } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className='empty container-cont'>
      {/* <h2 className='title-cont'>
        Contact
      </h2> */}
      <div className='cont-container'>
        <div className='left-cont'>
        <h1>Contact Us</h1>
        <p>
          <span className='span-contact'>Disclaimer:</span> Before you send an email, please consider contacting us by opening a ticket on the Discord to get a response immediately
        </p>
        <a href='https://discord.gg/KwuUsyEEQb'>Join Discord <span><FontAwesomeIcon className="" icon={FaDiscord} /></span></a>
        </div>
        <div className='right-cont'>
          <h1>You Can Reach Us</h1>
          <a href="mailto:gowboostinglol@gmail.com">gowboostinglol@gmail.com<span><FontAwesomeIcon className="span-icn" icon={faEnvelope} /></span></a>
        </div>
      </div>

    </div>
  )
}

export default Contact
