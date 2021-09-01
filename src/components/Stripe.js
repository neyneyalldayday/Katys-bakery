import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51JKnrdJCLEsDyud23BzCg1ea7W8L14v3UTFPv8gEPpXtu6JOcjJl7TefMNJD6pF3SvC13BjXTpyBorTg3eE3CUql00vprCZAlq")
  }
  return stripePromise
}