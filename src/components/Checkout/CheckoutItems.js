import React from 'react'
import "./Checkout.css";
function CheckoutItems() {
  return (
    <div>
        <div style={{border:"1px solid #E7E7E7",width:"95px",display:"flex",height:"250px",margin:"25px"}}>
            <div style={{margin:"25px"}}>
                <img height="200px" src="https://m.media-amazon.com/images/I/318FHJFvpRL._SX300_SY300_QL70_FMwebp_.jpg"/>
            </div>
            <div style={{marginTop:"10px"}}>
            <div style={{fontSize:"20px"}} className='textgap'>New Poco (64GB)- gray</div>
            <div style={{fontweight:"bold"}} className='textgap'>50,000</div>
            <div className='textgap'>In Stock</div>
        </div>
        </div>
      
    </div>
  )
}

export default CheckoutItems
