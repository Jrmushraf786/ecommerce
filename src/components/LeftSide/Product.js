import React from 'react'
import "./LeftSide.css"
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';
function Product(props) {
  return (
    <div className='product'>
      <div className='product__image'>
        <img src="https://m.media-amazon.com/images/I/5179O8XO9OL._AC_UY218_.jpg"/></div>
        <div className='product__name'>
            New Oppo Reno 10 (64GB) - Blue
        </div>
        <div className='product__rating'>
            <Rating name="read-only" value="4" style={{ fontSize:"20px"}}readOnly />
        </div>
        <div className='product__price'>
         { getSymbolFromCurrency('USD')} 33,000
        </div>
    </div>

  )
}

export default Product;
