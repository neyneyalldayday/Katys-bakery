import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51JNN6MKUVY5Zu28JBbOULqZ8ynykj6ZXiBPlnYPnZ2RIjFGVwCvHnHGYFUxug0HiMlEJgZlIYUIz0Y4CXOFAwYGt00vZuxhWbx")
  }
  return stripePromise
}