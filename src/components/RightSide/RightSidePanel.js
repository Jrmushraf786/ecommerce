import React from 'react'
import "./RightSide.css";
function RightSidepanel() {
  return (
    <div className='RightSide__main'>
      Right Side
      <div className='RightSide__header'>
        Brand
      </div>
      <div className='RightSide__brandname'>
        <label className='brandname'>
          <input type="checkbox" value="Oppo" />Oppo
        </label>
        <label className='brandname'>
          <input type="checkbox" value="Oneplus" />Oneplus
        </label>
        <label className='brandname'>
          <input type="checkbox" value="Poco" />Poco
        </label>  <label className='brandname'>
          <input type="checkbox" value="vivo" />Vivo
        </label>
        <label className='brandname'>
          <input type="checkbox" value="Apple" />Apple
        </label>

      </div>
      <div className='RightSide__header'>
        Delivery Day
      </div>
      <div className='RightSide__deliveryday'>
        <label  className='deliveryday'>
          <input type='checkbox' value="Get it by tomorrow"/>Get it Buy Tomorrow
        </label>

        <label  className='deliveryday'>
          <input type='checkbox' value="Get it in two days"/>Get it in 2 Days
        </label>
        
        </div>
    </div>
  )
}

export default RightSidepanel
