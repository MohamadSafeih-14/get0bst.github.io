import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY = "pk_test_51MbhSqFt2NYJD0JMk6Wj7IEebwY4YKHPQ2oGRFQ0JYjVkqGD0pHQwLMs0LmEHVzOOG6Cx3I1VtJaOFS2wmY2bE9N007J97o4ZB"
const stripeTestPromise = loadStripe(PUBLIC_KEY)


const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer
