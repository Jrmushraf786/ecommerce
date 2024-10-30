import React from 'react'
import "./Products.css";
import StarRateIcon from '@mui/icons-material/StarRate';
const Products = (title,image,price) =>{
  return (
    <>
    <div className='Products'>
          <img
             src="https://m.media-amazon.com/images/I/41XqUg3MqfL._AC_UY218_.jpg" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>Oppo mobile</p>
                <div className="ProductsGroup">
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>100</strong>
                    </p>
                    <div className='ProductRating'>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                    </div>
                </div>
             </div>
             <button> Add To Cart</button>
    </div>
     <div className='Products'>
     <img
        src="https://m.media-amazon.com/images/I/716pi7fRTpL._AC_UY218_.jpg" 
        alt="" 
        />
        <div className="ProductInformation">
           <p>Redmi mobile</p>
           <div className="ProductsGroup">
               <p className='ProductPrice'>
                   <small>$</small>
                   <strong>100</strong>
               </p>
               <div className='ProductRating'>
                   <StarRateIcon/>
                   <StarRateIcon/>
                   <StarRateIcon/>
               </div>
           </div>
        </div>
        <button> Add To Cart</button>
</div>
<div className='Products'>
          <img
             src="https://m.media-amazon.com/images/I/61rIkFvFCGL._AC_UY218_.jpg" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>Oppo mobile</p>
                <div className="ProductsGroup">
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>100</strong>
                    </p>
                    <div className='ProductRating'>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                    </div>
                </div>
             </div>
             <button> Add To Cart</button>
    </div>
    <div className='Products'>
     <img
        src="https://m.media-amazon.com/images/I/41XqUg3MqfL._AC_UY218_.jpg" 
        alt="" 
        />
        <div className="ProductInformation">
           <p>RENO mobile</p>
           <div className="ProductsGroup">
               <p className='ProductPrice'>
                   <small>$</small>
                   <strong>100</strong>
               </p>
               <div className='ProductRating'>
                   <StarRateIcon/>
                   <StarRateIcon/>
                   <StarRateIcon/>
               </div>
           </div>
        </div>
        <button> Add To Cart</button>
</div>
<div className='Products'>
     <img
        src="https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_SR127,127_QL70_.jpg" 
        alt="" 
        />
        <div className="ProductInformation">
           <p>Oppo mobile</p>
           <div className="ProductsGroup">
               <p className='ProductPrice'>
                   <small>$</small>
                   <strong>100</strong>
               </p>
               <div className='ProductRating'>
                   <StarRateIcon/>
                   <StarRateIcon/>
                   <StarRateIcon/>
               </div>
           </div>
        </div>
        <button> Add To Cart</button>
</div>
  
  </>
  )
}

export default Products
