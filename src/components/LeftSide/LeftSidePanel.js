import React from 'react'
import "./LeftSide.css";

import StarRateIcon from '@mui/icons-material/StarRate';
function LeftSidePanel(props) {
  return (
    <div className='LeftSide__main'> 
    LeftSide
  
    <div className='Products'>
          <img
             src="https://m.media-amazon.com/images/I/61rIkFvFCGL._AC_UY218_.jpg" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>itel A60s (4GB RAM + 64GB ROM, Up to 8GB RAM with Memory Fusion | 8MP AI Rear Camera)</p>
                <div className="ProductsGroup">
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>10,000</strong>
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
             src="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348?$240_240_PNG$" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>Samsung Galaxy S23 5G (Phantom Black, 8GB, 256GB Storage)</p>
                <div className="ProductsGroup">
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>50,000</strong>
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
             src="https://m.media-amazon.com/images/I/61yyz4BJzVL._AC_UY218_.jpg" 
             alt="" 
             />
             <div className="information">
                <p>POCO X4 Pro 5G (Laser Blue, 6GB RAM 128GB Storage)</p>
                <div className="ProductsGroup">
                      
                <div className='ProductRating'>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                    </div>


                    <p className='ProductPrice'>
                        <small>₹</small>
                        <strong>₹17,385 
                            M.R.P: ₹23,999 (</strong>
                    </p>
                  
                </div>
             </div>
             <button> Add To Cart</button>
    </div> 
    <div className='Products'>
          <img
             src="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>Apple iPhone 15 plus (256GB) - blue</p>
                <div className="ProductsGroup">
                    <p className='ProductPrice'>
                        <small>$</small>
                        <strong>52,000</strong>
                    </p>
                    <div className='ProductRating'>
                        <StarRateIcon/>
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
             src="https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY327_FMwebp_QL65_.jpg" 
             alt="" 
             />
             <div className="ProductInformation">
                <p>POCO X4 Pro 5G (Laser Blue, 6GB RAM 128GB Storage)</p>
                <div className="ProductsGroup">
                      
                <div className='ProductRating'>
                        <StarRateIcon /> 
                        <StarRateIcon /> 

                        <StarRateIcon /> 
                        
                    </div>

                    
                    <p className='ProductPrice'>
                        <small>₹</small>
                        <strong>₹17,385 
                            M.R.P: ₹23,999 (28% off)</strong>
                    </p>
                  
                </div>
             </div>
             <button> Add To Cart</button>
    </div>
          
    </div>
  )
}

export default LeftSidePanel;
