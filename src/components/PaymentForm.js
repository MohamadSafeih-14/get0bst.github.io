import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import "../App.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../cmpCss/boosting.css"

import { useContext } from 'react'
import { AppContext } from '../App'

// import { useState } from 'react'

const MySwal = withReactContent(Swal)

const PaymentForm = (props) => {

    return (
        <div className='conts'>
            <p className=' text-zinc-100'>
                {/* {boosted.price} */}
            </p>
            {/* <p>
                {boosted.price}
            </p> */}

        </div>
    );
}

export default PaymentForm
