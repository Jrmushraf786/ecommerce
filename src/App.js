import React from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Card from './components/Card/Card';
//import DisplayContent from './components/DisplayContent/DisplayContent';
//import CheckoutItems from './components/Checkout/Checkout';
import PlaceOrder from './components/Placeorder/PlaceOrder';
const App = ()=> {
  return (
    
    <Router>
      
      <div>
        <Routes>
             
          
          <Route path="/" element={[<Header/>,<Home/>]}></Route>
          
        
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Card" element={<Card />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
         
        </Routes>
      </div>
    {/* <DisplayContent/>*/ }
    {/*<CheckoutItems/>*/}
  {<PlaceOrder/>}
      
    </Router>
   
    
    
    
    
  );
}

export default App;
