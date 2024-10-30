import React from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
function PlaceOrder(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
            <img className='placeorder__image' src="https://m.media-amazon.com/images/I/5179O8XO9OL._AC_UY218_.jpg"/>
        </Grid>
        <Grid item xs={4}>
            <div className='placrorder__description'>
            <div style={{fontSize:"24px", lineHeight:"32px",fontweight:"500"}}> New Oppo (245GB) - Blue</div>
            <div>
                <Rating name="read-only" value="3" readOnly style={{fontSize:"20px"}}/>
                30,999 rating |
                1000+ answered questions
            </div>
            <hr></hr>
            <div>
                <div className='textgap'>Price: <span className='pricetag'>₹40,999.00</span></div>
                <div className='textgap'>FREE delivery: <strong>Wednesday, July 17</strong> </div>
                <div className='textgap'>EMI start at 2,401. No CostEMI available</div>
                <div style={{color:"#007600", fontSize:"20px"}} className='textgap'>In stock</div>
                <div className='textgap'>Sold by<strong>Electronics</strong> and</div>
                </div>
                <div>
                    <br></br>
                    <div style={{fontSize:"24px"}} className='textgap'>About this Item</div>
                    <div>
                        <ul>
                            <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                            <li>17.12 cm (6.74 inch) HD+ Display</li>
                            <li>50MP + AI Lens + 2MP | 8MP Front Camera</li>
                            <li>5000 mAh Battery</li>
                            <li>Helio G85 Processor</li>
                            <li> 	
Dual 4G VoLTE, Wi-Fi, Bluetooth, GPS, USB Type-C</li>

                        </ul>
                    </div>
                </div>
                </div>

        </Grid>
        <Grid item xs={2}>
            <Paper varient="outlined" className='placeorder__order'>
                <button className='placeorder__button addtocart'>AA to Cart</button>
                <button className='placeorder__button buynow'> Buy Now</button>

            </Paper>
        </Grid>
        <Grid item xs={6}>
            <img className='placeorder__image' src="https://m.media-amazon.com/images/I/61yyz4BJzVL._SY741_.jpg"/>
        </Grid>
        <Grid item xs={4}>
            <div className='placrorder__description'>
            <div style={{fontSize:"24px", lineHeight:"32px",fontweight:"500"}}> POCO X4 Pro 5G (Laser Black, 8GB RAM 128GB Storage)</div>
            <div>
                <Rating name="read-only" value="3" readOnly style={{fontSize:"20px"}}/>
                20,989 rating |
                1000+ answered questions
            </div>
            <hr></hr>
            <div>
                <div className='textgap'>Price: <span className='pricetag'>₹20,999.00</span></div>
                <div className='textgap'>FREE delivery: <strong>Monday, March 15</strong> </div>
                <div className='textgap'>EMI start at 1,404. No CostEMI available</div>
                <div style={{color:"#007600", fontSize:"20px"}} className='textgap'>In stock</div>
                <div className='textgap'>Sold by<strong>Electronics</strong> and</div>
                </div>
            </div>
            <div>
                    <br></br>
                    <div style={{fontSize:"24px"}} className='textgap'>About this Item</div>
                    <div>
                        <ul>
                            <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                            <li>‎18 x 9 x 7.1 cm; 550 Grams</li>
                            <li>16.94 cm (6.67 inch) Full HD+ Super AMOLED Display</li>
                            <li>64MP + 8MP + 2MP | 16MP Front Camera</li>
                            <li>5000 mAh Lithium-ion Polymer Battery</li>
                            <li>Qualcomm Snapdragon 695 5G Processor</li>
                            <li> 	
Dual 4G VoLTE, Wi-Fi, Bluetooth, GPS, USB Type-C</li>

                        </ul>
                    </div>
                </div>
          
            </Grid>
            <Grid item xs={6}>
            <img className='placeorder__image' src="https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg"/>
        </Grid>
        <Grid item xs={4}>
            <div className='placrorder__description'>
            <div style={{fontSize:"24px", lineHeight:"32px",fontweight:"500"}}> Oneplus Nord CE 3 5G (Grey Shimmer, 8GB RAM, 128GB Storage)</div>
            <div>
                <Rating name="read-only" value="3" readOnly style={{fontSize:"20px"}}/>
                25,324 rating |
                1000+ answered questions
            </div>
            <hr></hr>
            <div>
                <div className='textgap'>Price: <span className='pricetag'>₹24,999.00</span></div>
                <div className='textgap'>FREE delivery: <strong>Tuesday 16 Apirl</strong> </div>
                <div className='textgap'>EMI start at 1,212. No CostEMI available</div>
                <div style={{color:"#007600", fontSize:"20px"}} className='textgap'>In stock</div>
                <div className='textgap'>Sold by<strong>Electronics</strong> and </div>
                </div>
            </div>
            <div>
                    <br></br>
                    <div style={{fontSize:"24px"}} className='textgap'>About this Item</div>
                    <div>
                        <ul>
                      
                            <li>
                              Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens; 16MP Front (Selfie) Camera
                               </li>
                            <li>
                            Camera Features: Ultra Steady Mode, Dual-view Video, HDR, Nightscape, Portrait Mode, Video Portrait, Pano, Macro, Slo-mo, Time-lapse, Text-scanner, Retouching, Filters, Google Lens, Extra HD, Pro Mode
                            </li>
                            <li>
                            Display: 6.7 Inches; 120 Hz AMOLED FHD+, Resolution: 2412 x 1080 pixels; HDR 10+, sRGB, 10-bit Color Depth, 93.4% Screen to body ratio
                            </li>
                            <li> Operating System: OxygenOS 13 based on Android 13.1</li>
                            <li>Processor: Qualcomm Snapdragon 782G Mobile Platform</li>
                         

                        </ul>
                    </div>
                </div>
          
            </Grid>
      </Grid>
    </div>
  )
}

export default PlaceOrder
