import React from 'react'
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';
function Checkout(props) {
  return (
    <div className='checkout__body'>
      <Grid container >
        <Grid item={10}>
            <div className='checkout__container'>
            <div style={{fontSize:"24px",fontweight:"500",padding:"20px 0px 0px 20px"}}> ShoppingCart</div>
            <div>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
            </div>
            </div>
        </Grid>
        <Grid item={2}>
            <div style={{width:"300px", height:"200px",padding:"20px",marginTop:"25px",backgroundColor:"white"}}> 
                <div style={{fontSize:"26px"}}>Subtotal (2 items):1,01,989.00</div>
                <div style={{padding:"25px"}}>
                    <button className='placeorder__button'> to BuyProceed</button>
                </div> 
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout
