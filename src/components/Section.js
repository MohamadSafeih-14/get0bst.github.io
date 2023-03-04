import React from 'react'
import '../App.css'
    // const section = document.querySelector("#section");
    // const header = document.getElementById("header");

  //     window.addEventListener("scroll", function() {
  //       if (section !== null) {
  //         window.onscroll = function() {
  //           if (window.scrollY > section.offsetTop + 200) {
  //             console.log("its Currect")
  //             header.style.backgroundColor = "#191f2a";
  //           } else if (window.scrollY === section.offsetTop) {
  //             header.style.backgroundColor = "#0000004d";
  //           }
  //         }
  //       console.log(section)
  //   } else {
  //     console.log("its Wrong")
  //   }
  // })
const Section = ( ) => {

const consoleIt = (id) => {
  console.log("print It")
}

  return (
    <section id="section" onLoad={() =>  {consoleIt()}}>
    <div className='side-left'>
      <h1>looking to climb up the leaderboard? </h1>
      <h2>we offer you a smooth, cheap and highly flexible experience
          with our professional boosters
      </h2>
      <button>ORDER NOW!</button>
    </div>
    <div className='side-right'>
    <h1> We are hiring !! </h1>
      <h2>you have high LOL skills that you want to turn into money?</h2>
      <h3>Applications are now open for a limited time
      </h3>
      <button>Apply here!</button>
    </div>
    </section>
  )

}

export default Section
