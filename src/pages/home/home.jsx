import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <p className="intro-text">Are you a: </p>
      <div className="btn__container">
        <Link className="btn__link__buyer" to="/buy">
          <button className="btn">Buyer</button>
        </Link>
        <p>Or</p>
        <Link className="btn__link__seller" to="/sell">
          <button className="btn">Seller</button>
        </Link>
      </div>
    </div>
  )
}