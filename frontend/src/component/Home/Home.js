import React, { Fragment, useEffect } from 'react'
import "./Home.css"
import ProductCard from "./ProductCard.js"
import MetaData from '../layout/MetaData'
import { clearErrors, getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../layout/Loader/Loader"
import { useAlert } from 'react-alert'

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector(
    state=>state.products
  )

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])

  window.addEventListener("contextmenu", (e) => e.preventDefault())

  return (
    <Fragment>
      { loading ? (
        <Loader />
      ) : ( 
        <Fragment>
          <MetaData title="Ecommerce" />

          <div className='banner'>
            <p>Welcome To Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href='#container'>
              <button>
                Scroll
              </button>
            </a>
          </div>

          <h2 className='homeHeading'>Featured Products</h2>

          <div className='container' id="container">
            {products && products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}                
          </div>
      </Fragment>
    )}
    </Fragment>
  )
}

export default Home