import React from 'react'
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import "./orderSuccess.css"
import { Link } from 'react-router-dom'
import { Typography } from "@material-ui/core"

const OrderSuccess = () => {
  return (
    <div className='orderSuccess'>
      <CheckCircleIcon />
      <Typography>Your order has been placed successfully!</Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  )
}

export default OrderSuccess