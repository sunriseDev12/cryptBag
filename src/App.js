
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login';
import Sign from './components/signup';
import Home from './components/home';
import Navbar from './components/navbar'
import Checkout from './components/checkout'
import Check from './components/check'
import Cart from './components/cart'
import Detail from './components/detail'
import Footer from './components/footer'
import Profile from './components/profile'








function App() {


  
  return (
    <BrowserRouter>
   <Navbar/>
 
    <Routes>
        
        <Route path = '/' element ={<Login/>}/>
        <Route path = '/signup' element ={<Sign/>}/>
        <Route path = '/home' element ={<Home/>}/>
        <Route path = '/checkout' element ={<Checkout/>}/>
        <Route path = '/cart' element ={<Cart/>}/>
        <Route path = '/detail' element ={<Detail/>}/>
        <Route path = '/footer' element ={<Footer/>}/>
        <Route path = '/check' element ={<Check/>}/>
        <Route path = '/profile' element ={<Profile/>}/>
     
        {/* <Route path = '/updateprofile' element ={<Update/>}/> */}
       
    
        
      
    </Routes>

  </BrowserRouter>
  
 
  
  );
}

export default App;
