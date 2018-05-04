import React from 'react'
import { Link } from 'react-router-dom'

export const Seller = () => {
  return (
    <div className="seller">
      <p className="seller__text">What would you like to sell? Create your item here: </p>
      <div className="items__form__container">
        <form>
          <label>
            Item title:
            <input type="text" />
          </label>
          <label>
            Start price:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}