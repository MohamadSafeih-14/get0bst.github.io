import React from 'react'
import '../cmpCss/whyus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { faCrosshairs  } from '@fortawesome/free-solid-svg-icons'
import { faMugHot  } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
const WhyUs = () => {
  return (
    <div className='container'>
        <div className='card'>
            <h2> <FontAwesomeIcon className="Fa-icont" icon={faMugHot} /> Smooth & Flexible </h2>
            <p>The Player Dashboard allows you to communicate with the booster directly, pause the boosting process and even change the booster if needed.
            We set high standards to make sure the boosting process goes
            as smooth as possible for both the Boosters and Customers
            </p>
        </div>
        <div className='card'>
        <h2> <FontAwesomeIcon  className="Fa-icont" icon={faFingerprint}/> Safety </h2>
            <p>Your account safety is our top priority.
            And for that we have enforced the usage of VPN
            and a strict criteria that must be complied by the boosters
            while they're in your account 
            </p>
        </div>
        <div className='card'>
        <h2><FontAwesomeIcon className="Fa-icont" icon={faSmileWink}/> Don't worry! </h2>
            <p>Being our customer, you will never feel lost as we have a
            team of supporters ready to communicate with you and 
            answer any questions/concerns that you have at any time
            </p>
        </div>
        <div className='card'>
        <h2> <FontAwesomeIcon className="Fa-icont" icon={faShieldHalved}/> Privacy </h2>
            <p>All messages received during the process will be ignored,
                whether it's by your friends or by the in-game teammates.
                The usage of chat is forbidden by the boosters.
                Offline mode is an option for those that want to stay invisible
            </p>
        </div>
        <div className='card'>
        <h2 className='carefully'> <FontAwesomeIcon className="Fa-icont" icon={faCrosshairs}/> Carefully picked boosters </h2>
            <p>Our boosters represent the top 0.1% of all league of legends leaderboard.
                The boosters go through a training camp before getting on board
            </p>
        </div>
        <div className='card'>
        <h2> <FontAwesomeIcon className="Fa-icont" icon={faMoneyBillTransfer}/> Cheapest prices </h2>
            <p>We offer you competetive prices that almost no other website
                will offer
            </p>
        </div> 
    </div>
  )
}

export default WhyUs
