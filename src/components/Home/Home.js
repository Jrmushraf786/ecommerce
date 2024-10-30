
import './Home.css';
import Products from '../Products/Products';

function Home() {

  return (
    <>
    <div className='home'>
        <div className='homeContainer'>
          <div className='homeSliderContainer'>
            <div className='homeSlide'>
                <img className='homeImg' src="https://m.media-amazon.com/images/I/61GfWyQax7L._SX3000_.jpg"alt="" />
            </div>
            <div className='homeSlide'>
                <img className='homeImg' src="https://m.media-amazon.com/images/I/61GfWyQax7L._SX3027_.jpg"alt="" />
            </div>
            <div className='homeSlide'>
                <img className='homeImg' src="https://m.media-amazon.com/images/I/61GfWyQax7L._SX3047_.jpg"alt="" />
            </div>
          </div>
          {/* Home Row */}
          <div className='HomeRow'>
          <Products  title="Oppo mobile" 
             price={2000}
            image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/m/e/-original-imaguy4b7uchxevz.jpeg?q=70" 
            />

          </div>
          {/*second Row*/}
          <div className='HomeRow'>
          <Products  title="Redmi mobile" 
             price={2000}
            image="https://m.media-amazon.com/images/I/716pi7fRTpL._AC_UY218_.jpg" 
            />

          </div>

        </div>
    </div>
    </>
  )
}
export default Home;


