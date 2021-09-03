// import React, { useState } from "react"
// import { loadStripe } from "@stripe/stripe-js"

// const buttonStyles = {
//   fontSize: "13px",
//   textAlign: "center",
//   color: "#000",
//   padding: "12px 60px",
//   boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
//   backgroundColor: "rgb(235, 39, 152)",
//   borderRadius: "6px",
//   letterSpacing: "1.5px",
// }

// const buttonDisabledStyles = {
//   opacity: "0.5",
//   cursor: "not-allowed",
// }

// let stripePromise
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("pk_test_51JNN6MKUVY5Zu28JBbOULqZ8ynykj6ZXiBPlnYPnZ2RIjFGVwCvHnHGYFUxug0HiMlEJgZlIYUIz0Y4CXOFAwYGt00vZuxhWbx")
//   }
//   return stripePromise
// }

// const Checkout = () => {
//   const [loading, setLoading] = useState(false)

//   const redirectToCheckout = async event => {
//     event.preventDefault()
//     setLoading(true)

//     const stripe = await getStripe()
//     const { error } = await stripe.redirectToCheckout({
//       mode: "payment",
//       lineItems: [{ price: "price_1JVK5fKUVY5Zu28JsD4DhWfA", quantity: 1 }],
//       successUrl: `https://buy.stripe.com/test_5kAfZQbf960YfjWbII`,
//       cancelUrl: `http://localhost:8000/`,
//     })

//     if (error) {
//       console.warn("Error:", error)
//       setLoading(false)
//     }
//   }

//   return (
//     <button
//       disabled={loading}
//       style={
//         loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
//       }
//       onClick={redirectToCheckout}
//     >
//       BUY NOW
//     </button>
//   )
// }

// export default Checkout