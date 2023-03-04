import React, { useState } from 'react'
import '../cmpCss/boosting.css'
import iron from '../assets/iron.webp'
import bronze from '../assets/bronze.webp'
import silver from '../assets/silver.webp'
import gold from '../assets/gold.webp'
import platinum from '../assets/platinum.webp'
import diamond from '../assets/diamond.webp'
import master from '../assets/master.webp'
import PaymentForm from './PaymentForm'
import { useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import "../App.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AppContext } from '../App'
const MySwal = withReactContent(Swal)

const Getboosting = () => {
  // const {  pricFinal } = useContext(AppContext)
  const [showItem, setShowItem] = useState(false)
  // const [desireDiv, setDesireDiv] = useState()
  // const [currentDiv, setCurrentDiv] = useState()
  // const [desireLeg, setDesireLeg] = useState()
  // const [currnetLeg, setCurrnetLeg] = useState()
  // Variables Section
  let totlass = document.querySelector(".totals")
  let currnetLeg = Number();
  // console.log(currnetLeg)
  let currentDiv = 0;
  let desireLeg = Number();
  // console.log(desireLeg)
  let desireDiv = 0;
  let mood = "";
  let resultOne = 0;
  let resultTwo = 0;
  let finans;
  let result1;
  let result2;
  let serverMood = "europe";
  let cal1 = "notchoosed";
  let cal2 = "notchoosed";
  let cal3 = "notchoosed";
  let cal4 = "notchoosed";
  let finasan = finans;
  let pricFinal = 0;
  const [res, setRes] = useState(finasan)
  const [boosted, setBoosted] = useState( {
    name: "Master1212",
    price: finasan,
})
  const finalResult = () => {
    let checCard = document.querySelector(".StripeCheckout")
    // checCard.style.display = "none"
    // totlass.style.display = "none";
    let heds = document.querySelector(".header-bost")
    let hedso = document.getElementsByClassName("header-bosto")
    let zHeds = document.querySelector(".header-bst")
    let zHed = document.querySelector(".err-header")
    result1 = +currnetLeg + +currentDiv;
    // console.log(currentDiv)
    result2 = +desireLeg + +desireDiv;
    // console.log(desireDiv)
    // console.log(result1)
    // console.log(result2)
    finans = result2 - result1 ;
    // console.log(showItem)
    // console.log(finans)
    if (finans > 0) {
      zHed.style.display = "none"
      // console.log("its above 0")
      // console.log("####")
      if (result1 > result2) {
        zHed.style.display = "block"
        console.log("sorry")
        console.log("something went wrong!!")
      } else{
        zHed.style.display = "none"
        if (serverMood === "europe") {
          // console.log(`Total $${finans / 10}$`)
          heds.innerHTML =`Total $${finans / 10}`;
          zHeds.innerHTML = `Total $${Math.round(finans / 9) }`
          finasan = finans / 10;
          pricFinal = finasan;
          // console.log(pricFinal + "|| My Family :(")
          // console.log(finasan)
          // setShowItem(!showItem)
          // totlass.innerHTML += finasan
          // totlass.style.display = "block";
          hedso.innerHTML =`Total $${finans / 10}$`;
        } else {
          zHed.style.display = "none"
          // console.log(`Total $${finans / 10}$`)
          heds.innerHTML =`Total $${Math.round(finans / 9) }`;
          zHeds.innerHTML = ` Total $${Math.round(finans / 9) } `
          finasan = finans / 7; 
          pricFinal = finasan;        
          // console.log(pricFinal + "|| My Family :(")
          // totlass.innerHTML += finasan
          // setShowItem(true)
          // console.log(showItem)
          // totlass.style.display = "block";
          // checCard.style.display = "block"
          hedso.innerHTML =`Total $${Math.round(finans / 7) }$`;
        }
      } 
    } else {
      zHed.style.display = "block"
    }
  }

  const setFins = (id) => {
    setShowItem(!showItem)
    // console.log(id)
    boosted.price = finasan;
    // let btn = document.querySelector('.StripeCheckout ')
    // let spn = document.querySelector('.StripeCheckout span')
    // spn.style = '';
    // btn.style = '';
    // console.log(btn)
  }


  

  const publishableKey = 
  'pk_test_51MbhSqFt2NYJD0JMk6Wj7IEebwY4YKHPQ2oGRFQ0JYjVkqGD0pHQwLMs0LmEHVzOOG6Cx3I1VtJaOFS2wmY2bE9N007J97o4ZB';

  const handleSuccess = () => {
      MySwal.fire({
          icon: 'success',
          title: "Payment was successful",
          timer: 4000,
      })
  }

  const payNow = async token => {
      try {
       const respnse = await axios({
          url:'http://localhost:5000/payment',
          method: "post",
          data: {
              amount: boosted.price * 100,
              token,
          }
       })   
       if(respnse.status === 200) {
          handleSuccess()
          console.log("your payment was successful")
       }
      } catch (error) {
          console.log(error)
      }
  }
  const priceForStripe = boosted.price * 100;



















  // const renderCpm = () => {
  //   if (pricFinal > 0) {
  //     return <StripeCheckout 
  //     stripeKey={publishableKey}
  //     label='Pay Now'
  //     name="Pay With Credit Card"
  //     amount={priceForStripe}
  //     description={`Your total is $${pricFinal}`}
  //     token={payNow}
  // />
  //   }
  //     ;
  // }


  const setServerVal = (moodserver) => {
    signClickServ(moodserver)
    if (moodserver === "northAmerica") {
      serverMood = "northAmerica"
    } else {
      serverMood = "europe"
    }
    finalResult()
  }








  // const calcualThem = () => {
  //   let heds = document.querySelector(".header-boost")
  //   result1 = currnetLeg + currentDiv;
  //   console.log(result1)

  //   result2 = desireLeg + desireDiv;
  //   console.log(result2)
  //   finans = result2 - result1;
  //   console.log("##########################")
  // }



  const signClick = (id) => {
    let btns = document.querySelectorAll(".iron")
    let arrOfbtns = [];

    for (let i = 0; i < btns.length; i++) {
      arrOfbtns.push(btns[i])
    }
    arrOfbtns.map((btn) => {
      btn.className = "iron";
      btn.style.backgroundColor = ""
    })
    let theBtn = document.getElementById(id);
    theBtn.className = "Clicked iron"
    let clickedBtn = document.querySelector(".Clicked")
      clickedBtn.style.backgroundColor = "#0044a4";
  }

  const signClickServ = (id) => {
    let btns = document.querySelectorAll(".setServer")
    let arrOfbtns = [];

    for (let i = 0; i < btns.length; i++) {
      arrOfbtns.push(btns[i])
    }
    arrOfbtns.map((btn) => {
      btn.className = "setServer";
      btn.style.backgroundColor = ""
    })
    let theBtn = document.getElementById(id);
    theBtn.className = "clid setServer"
    let clickedBtn = document.querySelector(".clid")
      clickedBtn.style.backgroundColor = "#0044a4";
  }


  const signClickdiv = (ids) => {
      let btns = document.querySelectorAll(".lef-divs")
      let arrOfbtns = [];
  
      for (let i = 0; i < btns.length; i++) {
        arrOfbtns.push(btns[i])
      }
      arrOfbtns.map((btn) => {
        btn.className = "lef-divs";
        btn.style.backgroundColor = ""
      })
      let theBtn = document.getElementById(ids);
      theBtn.className = "Clickeddiv lef-divs"
      let clickedBtn = document.querySelector(".Clickeddiv")
        clickedBtn.style.backgroundColor = "#0044a4";

  }


  const signClickdiv2 = (ids) => {
    let btns = document.querySelectorAll(".righ-divs")
    let arrOfbtns = [];

    for (let i = 0; i < btns.length; i++) {
      arrOfbtns.push(btns[i])
    }
    arrOfbtns.map((btn) => {
      btn.className = "righ-divs";
      btn.style.backgroundColor = ""
    })
    let theBtn = document.getElementById(ids);
    theBtn.className = "Clickeddiv2 righ-divs"
    let clickedBtn = document.querySelector(".Clickeddiv2")
      clickedBtn.style.backgroundColor = "#0044a4";
  }



  const signClick2 = (id) => {
    let btns = document.querySelectorAll(".iron2")
    let arrOfbtns = [];

    for (let i = 0; i < btns.length; i++) {
      arrOfbtns.push(btns[i])
    }
    arrOfbtns.map((btn) => {
      btn.className = "iron2";
      btn.style.backgroundColor = ""
    })
    let theBtn = document.getElementById(id + "2");
    theBtn.className = "Clicked2 iron2"
    let clickedBtn = document.querySelector(".Clicked2")
      clickedBtn.style.backgroundColor = "#0044a4";
  }


  // First Function
  const calcing = (rank) => {
    // let heds = document.querySelector(".header-boost")
    signClick(rank)
    let btns = document.querySelectorAll(".lef-divs")
    let arrOfbtns = [];

    for (let i = 0; i < btns.length; i++) {
      arrOfbtns.push(btns[i])
    }
    arrOfbtns.map((btn) => {
      btn.className = "lef-divs";
      btn.style.backgroundColor = ""
    })
    let XI = document.getElementById("IV")
    let III = document.getElementById("III")
    let II = document.getElementById("II")
    let I = document.getElementById("I")  
    //  rank calcualating
    currentDiv = 0;
    currnetLeg = +rank;
      if (rank == 0) {
        mood = "iron";
      } else if (rank == 200) {
        mood = "bronze";
      } else if (rank == 440) {
        mood = "silver";
      } else if (rank == 740) {
        mood = "gold";
      } else if (rank == 1240) {
        mood = "platinum";
      } else if (rank == 2160) {
        mood = "diamond";
      } else if (rank == 6010) {
        mood = 'master';
      }
      // division if statment to specify their value
      if (mood == "iron") {
        XI.value = 0
        III.value = 50
        II.value = 100
        I.value = 150
    } else if (mood == "bronze") {
        XI.value = 0
        III.value = 60
        II.value = 120
        I.value = 180
    } else if (mood == "silver") {
        XI.value = 0
        III.value = 75
        II.value = 150
        I.value = 225
    } else if (mood == "gold") {
        XI.value = 0
        III.value = 125
        II.value = 250
        I.value = 375
    } else if (mood == "platinum") {
        XI.value = 0
        III.value = 200
        II.value = 420
        I.value = 670
    } else if (mood == "diamond") {
        XI.value = 0
        III.value = 600
        II.value = 1350
        I.value = 2350
    } else if (mood == "master") {
        XI.value = 0
        III.value = 0
        II.value = 0
        I.value = 0
        finalResult()
    } else {
        console.log('what')
    }
  }
  // Second Function
  const calcing2 = (rank) => {
    // let heds = document.querySelector(".header-boost")
      signClick2(rank)
      let btns = document.querySelectorAll(".righ-divs")
      let arrOfbtns = [];
  
      for (let i = 0; i < btns.length; i++) {
        arrOfbtns.push(btns[i])
      }
      arrOfbtns.map((btn) => {
        btn.className = "righ-divs";
        btn.style.backgroundColor = ""
      })
      let XI2 = document.getElementById("IV2")
      let III2 = document.getElementById("III2")
      let II2 = document.getElementById("II2")
      let I2 = document.getElementById("I2")
      //  rank calcualating
      // console.log(+rank)
      // console.log(desireDiv) 
      desireDiv = 0;
      desireLeg = +rank;
        if (rank == 0) {
          mood = "iron";
        } else if (rank == 200) {
          mood = "bronze";
        } else if (rank == 440) {
          mood = "silver";
        } else if (rank == 740) {
          mood = "gold";
        } else if (rank == 1240) {
          mood = "platinum";
        } else if (rank == 2160) {
          mood = "diamond";
        } else if (rank == 6010) {
          mood = 'master';
        }
        // division if statment to specify their value
        if (mood == "iron") {
          XI2.value = 0
          III2.value = 50
          II2.value = 100
          I2.value = 150
      } else if (mood == "bronze") {
          XI2.value = 0
          III2.value = 60
          II2.value = 120
          I2.value = 180
      } else if (mood == "silver") {
          XI2.value = 0
          III2.value = 75
          II2.value = 150
          I2.value = 225
      } else if (mood == "gold") {
          XI2.value = 0
          III2.value = 125
          II2.value = 250
          I2.value = 375
      } else if (mood == "platinum") {
          XI2.value = 0
          III2.value = 200
          II2.value = 420
          I2.value = 670
      } else if (mood == "diamond") {
          XI2.value = 0
          III2.value = 600
          II2.value = 1350
          I2.value = 2350
      } else if (mood == "master") {
          XI2.value = 0
          III2.value = 0
          II2.value = 0
          I2.value = 0
          finalResult()
      }
  }
  // devisions function to calc them
  const divCalc = (division) => {
    if (currnetLeg !== null) {
    signClickdiv(division)
      // let heds = document.querySelector(".header-boost")
      let devis = document.getElementById(division);
      currentDiv = +devis.value;
      // console.log(currentDiv)
      finalResult()
    }
  }
    const divCalc2 = (division) => {
     if (desireLeg !== null) {
      // setDesireDiv(0)
      signClickdiv2(division)
        let heds = document.querySelector(".header-boost")
        let devis = document.getElementById(division);
        // console.log( desireDiv = +devis.value)
        desireDiv = +devis.value
        // console.log(desireDiv)
        finalResult()
      }
 }

//  const { pricFinal } = useContext(AppContext)

  // returning the stuff

  return (
    <div className='empty1'>
    <div className='Boosted-Header'>
      Get Boosted
    </div>
    <div className='err-header'>
      Please Check Your Chooses
    </div>
    <h1 className='header-fq'>
    Have any questions? Read our FAQ below
    </h1>
    {/* first side */}
      <div className='container-boost'>
      <div className='sides-container'>
      <div className='left-container'>
      <span className='spand'>
    1
      </span>
      <div className='left-boost'>
      <h1 className='header-boost'>Currnet League</h1>
      <button className='iron' id='0'>
      <img src={iron}/>
      <span value={0} className='0' onClick={(e) => {
        calcing(e.target.className)
      }}>iron</span>
      </button>
      <button className='iron'  id='200'>
      <img  className='iron'  src={bronze}/>
      <span  value={200} className='200' onClick={(e) => {
        calcing(e.target.className)
      }}>gold</span>
      </button>
      <button className='iron' id='440'>
      <img src={silver}/>
      <span value={440} className='440' onClick={(e) => {
        calcing(e.target.className)
      }}>silver</span>
      </button>
      <button className='iron' id='740'>
      <img src={gold}/>
      <span value={740} className='740' onClick={(e) => {
        calcing(e.target.className)
      }}>gold</span>
      </button>
      <button className='iron' id='1240'>
      <img src={platinum}/>
      <span value={1240} className='1240' onClick={(e) => {
        calcing(e.target.className)
      }}>platinum</span>
      </button>
      <button value={2160} className='iron' id='2160'>
      <img src={diamond}/>
      <span className='2160' onClick={(e) => {
        calcing(e.target.className)
      }}>diamond</span>
      </button>
      {/* <button value={6010} className='iron' id='6010'>
      <img src={master}/>
      <span className='6010' onClick={(e) => {
        calcing(e.target.className)
      }}>master</span>

      </button> */}

      </div>
      <div className='left-div'>
      <h1 className='header-bt'> Division</h1>
      <button className='lef-divs' onClick={(e) => {
        divCalc(e.target.id)
      }} id='IV' value={0}>IV</button>
      <button className='lef-divs' onClick={(e) => {
        divCalc(e.target.id)
      }} id='III' value={0}>III</button>
      <button className='lef-divs' onClick={(e) => {
        divCalc(e.target.id)
      }} id='II' value={0}>II</button>
      <button className='lef-divs' onClick={(e) => {
        divCalc(e.target.id)
      }} id='I' value={0}>I</button>
    </div>
      </div>

      <div className='right-container'>
      <span className='spand'>
    2
      </span>
      <div className='right-boost'>
      <h1 className='header-boost'>Desire League</h1>
      <button className='iron2' id='02'>
      <img src={iron}/>
      <span value={0} className='0' onClick={(e) => {
        calcing2(e.target.className)
      }}>iron</span>
      </button>
      <button className='iron2' id='2002'>
      <img src={bronze}/>
      <span value={200} className='200' onClick={(e) => {
        calcing2(e.target.className)
      }}>gold</span>
      </button>
      <button className='iron2' id='4402'>
      <img src={silver}/>
      <span value={440} className='440' onClick={(e) => {
        calcing2(e.target.className)
      }}>silver</span>
      </button>
      <button className='iron2'  id='7402'>
      <img src={gold}/>
      <span value={740} className='740' onClick={(e) => {
        calcing2(e.target.className)
      }}>gold</span>
      </button>
      <button className='iron2' id='12402'>
      <img src={platinum}/>
      <span value={1240} className='1240' onClick={(e) => {
        calcing2(e.target.className)
      }}>platinum</span>
      </button>
      <button className='iron2' id='21602'>
      <img src={diamond}/>
      <span value={2160} className='2160' onClick={(e) => {
        calcing2(e.target.className)
      }}>diamond</span>
      </button>
      <button className='iron2' id='60102'>
      <img src={master}/>
      <span value={6010} className='6010' onClick={(e) => {
        calcing2(e.target.className)
      }}>master</span>

      </button>

      </div>
      <div className='right-div'>
      <h1 className='header-bt'> Division</h1>
      <button className='righ-divs' onClick={(e) => {
        divCalc2(e.target.id)
      }} id='IV2' value={0}>IV</button>


      <button className='righ-divs' onClick={(e) => {
        divCalc2(e.target.id)
      }} id='III2' value={0}>III</button>


      <button className='righ-divs' onClick={(e) => {
        divCalc2(e.target.id)
      }} id='II2' value={0}>II</button>


      <button className='righ-divs' onClick={(e) => {
        divCalc2(e.target.id)
      }} id='I2' value={0}>I</button>
      
    </div>
      </div>
      </div>
      <div className='middle-side'>

        <button className='dvs'>rank</button>
        <button className='dvs'>rank</button>
      </div>

      <div className='right-side'>
      <div className='total-container'>
      <div>
      <h1 className='header-bst'>
        </h1>
        <h1 className='total-price header-bost'>
        <span className='spand'>
    4
      </span>
        <span>Total:</span>
        </h1>
            <button className='brns' onClick={() => setFins()}>checkout</button>   
            {showItem && 
            <div className='totals'>
        <div className='conts'>
           <div className='pay-Header'> 
              <h1 className='header-bosto'>
              133414
              </h1>
            </div>  
            <div id='totlas'  className='tts'> 
            <div className='totalss'>
            <StripeCheckout 

                stripeKey={publishableKey}
                label='Pay Now'
                name="Pay With Credit Card"
                amount={priceForStripe}
                description={`Your total is $${boosted.price}`}
                token={payNow}
            />
            </div>
            </div>
        </div>
        </div>}  
      </div>
      </div>
      <div className='total-two'>
              <h1>
                Costumer <br /> Reviews
              </h1>
      </div>
      </div>

      </div>
      {/* divesions Side */}
      <div className='container-boost-div container-boost' >


    <div className='server-container'>
    <span className='spand'>
    3
      </span>
    <h1>
      Region
    </h1>
    <form>
    <select className='server-sel'>
    <option>
    <div className='setServer' onClick={(e) => {setServerVal(e.target.id)}} id="northAmerica">North America</div>
    </option>
    <option>
    <div className='setServer clid' onClick={(e) => {setServerVal(e.target.id)}} id='europe'>Europe West</div>
    </option>
    <option>
    <div className='setServer clid' onClick={(e) => {setServerVal(e.target.id)}} id='europe'>Europe Nordic & East</div>
    </option>
    </select>
    </form>
    {/* 
    
     */}
    </div>
      </div>
      <h1 className="header-faq hdfq">
      FA<span>Q</span>
      </h1>
     <div className='container cont-faq'>
        <div className='card'>
            <h2> Can I request a refund? If so, how? </h2>
            <p>Yes, you can request a refund within 24 hours after the purchase, only 
              if no booster was assigned for your order. You can do that by submitting
              a ticket on our Discord server
            </p>
        </div>
        <div className='card'>
        <h2> Is it safe to get boosted? </h2>
            <p>Boosting is against the rules of League Of Legends. However, the ban rate 
              is incredibly low, thanks to the fact that we have enforced high safety standards 
              on the boosters to assure that your account stays safe (VPN as an example)
              The ban rate itself is around 0.2%
            </p>
        </div>
        <div className='card crd1s'>
        <h2> What if my account got chat restricted by the booster? </h2>
            <p>We carefully choose our boosters & heavily enforce strict rules against any toxic 
              behavior during the process. However, if something goes wrong, the booster will 
              get cross-banned from all boosting websites, meaning they won't be able to work
              as a booster any more. And we will compensate you greatly with RP.
            </p>
        </div>
        <div className='card'>
        <h2> Can I still use my account after purchasing a boost?</h2>
            <p>if you wish to play other game modes on your account (Anything except ranked) 
              you can pause the boost temporarily from the Dashboard & turn it back on after 
              you're done
            </p>
        </div>
        <div className='card'>
        <h2 > Can I communicate with the booster? </h2>
            <p>You can talk to the booster through the Dashboard provided by the website
            </p>
        </div>
        <div className='card'>
        <h2> I don't like the current booster, can I change them? </h2>
            <p>
            If you were not satisfied with the booster, you can request to change him on the 
            dashboard, which will take 0-12 hours. However, this will flag the booster, so please 
            only consider it in severe cases.
            </p>
        </div> 
      </div> 
    </div>
  )
}

export default Getboosting
