import React from 'react'
import '../cmpCss/faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Faq = () => {

  return (
    <div  className='empty'>
    <h1 className="header-faq">
    Frequently  Asked <span>Qeustions</span>
    </h1>
      <div  className=' container-faq'>
      <div className='relative mb-4 crd-faq   w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-900
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      Is it safe to get boosted?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
        Boosting is against the rules of League Of Legends. However, the ban rate 
        is incredibly low, thanks to the fact that we have enforced high safety standards on the boosters to assure that your account stays safe (VPN as an example). The ban rate itself is around 0.2%
        </p>
        </div>

        </div>
      </div>

      <div className='relative mb-4  crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-900
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      I have a problem, how can I contact GOWboost support?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
           You can reach us here Contact us (Button to Contact us page)
        </p>
        </div>

        </div>
      </div>
      <div className='relative mb-4 crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-900
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      What happens if my account gets banned/muted for bad behaviour by the booster?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
          We carefully choose our Boosters & heavily enforce strict rules against any toxic behavior during the process. However, if something goes wrong, the booster will get cross-banned from 
          all boosting websites, meaning they won't be able to work as a booster any more. And we will compensate you greatly with RP. 

        </p>
        </div>

        </div>
      </div>
      <div className='relative mb-4  crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-900
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      How do I talk with the booster?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
            Once you have placed an order, you will get a live chat section
            with the booster on the Dashboard
        </p>
        </div>

        </div>
      </div>
      <div className='relative mb-4  crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-900
       rounded-md
      h-12  w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      Can I request a new booster
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
        If you were not satisfied with the booster, you can request to change him on the dashboard, which will take 0-24 hours. 
        However, this will flag the booster, so please only consider it in severe cases.
        </p>
        </div>

        </div>
      </div>
      <div className='relative mb-4  crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-809000
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      Can I apply for a Booster position?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
           Job applications are open for a short duration of time.
            Go to Job for more information. (Job is a button too)
        </p>
          </div>

          </div>
        </div>

        <div className='relative mb-4  crd-faq  w-[800px] overflow-hidden'>
      <input type="checkbox" className='
      absolute top-0 inset-x-0
      w-full h-12
      opacity-0 z-10 cursor-pointer
      peer
      '/>
      <div className='
       bg-neutral-809000
       rounded-md
      h-12 w-full
      pl-5
      flex items-center
      '>
      <h1 className='text-lg font-semibold text-white'>
      Can I play on my account while getting boosted?
      </h1>
        </div>
        <div className='
        absolute
        text-white
        top-3
        right-3
        transition-transform duration-300
        rotate-0
         peer-checked:rotate-180
        '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {/* Contaent */}
        <div className='
        max-h-0
         bg-neutral-900
        overflow-hidden
        transition-all duration-300
        peer-checked:max-h-40
        '>
        <div className='
        p-4
        '>
        <p className=' text-white'>
          We would like to make the process as smooth & quick as possible for you & the booster.
          So the answer is No. However, if you wish to play other game modes (other than ranked)
          with your friends, you can pause the boost process temporarily from the Dashboard and
          turn it back on after you're done.
        </p>
          </div>

          </div>
        </div>
      </div>
      <h2 className='header-faq hdr-f'>
      If your question was not answered above, open a ticket on our <a className=' underline text-blue-600' href='https://discord.gg/KwuUsyEEQb'>Discord</a> here <br />
      we answer tickets very quickly!
      </h2>
    </div>
  )
}

export default Faq
