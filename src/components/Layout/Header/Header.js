import "./Header.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header =()=>{
    return (
        <>
        <nav className="header">
            <div className="headerTop">
                <div className="headerLeftNav">
                    <MenuIcon/>
                </div>
                {/* Logo */}
                <Link to="/checkout">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3OmikUHzpPh7bRp-hUmUBQvhtWo55sIqBg&usqp=CAU"
                      alt=""
                      className="logo"
                    
                    />
                </Link>
                  {/* Search Box */} 
          
                    <div className="headerSearch">
                    <div>
                  <select> <option value="All Products">All</option>
                    <option value="Alexa">Alexa</option>
                    <option value="Books">Books</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    
                    </select> 
                  </div>
                        <input type="text"
                        className="headerSearchInput"/>
                        
                        <SearchIcon className="headerSearchIcon"/>
                    
                    </div>
                    
                  
                  
                   {/* Search Box */}
                  {/* Links */}
                  <div className="headerNavbar">
                    {/* Signout/sigin */}
                    <Link to="/Login" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Hello</span>
                            <span className="headerOption_One">User</span>
                        </div>
                    </Link>
                       {/* Return Order */}
                       <Link to="/Orders" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Return</span>
                            <span className="headerOption_Two">Order</span>
                        </div>
                    </Link>
                       {/*Prime */}
                       <Link to="/" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Try</span>
                            <span className="headerOption_Two">Prime</span>
                        </div>
                    </Link>
                       {/*profile */}
                       <Link to="/Profile" className="headerLink">
                        <div className="headerOptions">
                            <span className="headerOption_One">Your</span>
                            <span className="headerOption_One">Prime</span>
                        </div>
                    </Link>
                       {/*Basket */}
                       <Link to="/Cart" className="headerLink">
                        <div className="headerOptions_Basket">
                            <ShoppingBasketIcon />
                            <span className="headerOption_two
                            basketCount">4</span>
                        </div>
                    </Link>
                  </div>
                  {/* Links */}
            </div>

              {/* Navbar Bottom */}
              <div className="headerBottom">
                {/* Address */}
                  <div className="headerAddress">
                    <div className="headerAddress_Icon"></div>
                     <LocationOnIcon />
                  </div>
                  <div className="headerOptions">
                    <span clasName="headerOPtion_One">Delivery To
                    </span>
                    <span clasName="headerOPtion_Two"> Easy
                    </span>
                    
                  </div>
                {/* Header Bottom Nav */}
                <div className="headerbottom_Navbar">
                <span>
                    <Link to="/ListProducts" className="headerLink">
                     All Products
                        </Link>
                        <div className="Navbar__footer">
                            <div className="Navbar__footer_text">Best Seller</div>
                        </div>
                </span>
                <span>Book</span>
                <span>New Release</span>
                <span>Best Seller</span>
                <span> Mobiles </span>
                <span>Amazon Pay</span>
              </div>
              </div>
              {/* Navbar Bottom */}

        </nav>
        </>
    
    );
}
export default Header;