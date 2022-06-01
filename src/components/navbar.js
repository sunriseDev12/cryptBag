// import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from 'react-router-dom';
// import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
import Logo1 from '../components/Assests/logo/logoNewWhite.png';
import'./navbar.css';






function Navbars() {
  const navigate =useNavigate();
  function NextPage(){
      navigate('/profile');
  }

  function Homme(){
      navigate('/home');
  }
  
  return (
    <div>
      <div className='container-fluid fluids'>
        <div className='row rowheight'>
          <div className='col-md-2'>
            <img src={Logo1} alt="logo"/>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-1'>
            <button className='jack' onClick={Homme}>Jackets</button>
          </div>
          <div className='col-md-1'>
            <button className='shoe'>Shoe</button>
          </div>
          <div className='col-md-1'>
            <button className='acc'>Accessories</button>
          </div>
          <div className='col-md-1'>
            <button className='trac'>Track</button>
          </div>
          <div className='col-md-1'>
          <i class="fa fa-user profiles" onClick={NextPage}></i>
          </div>
          <div className='col-md-1'>
          <i class="fa fa-shopping-cart ccart" aria-hidden="true"></i>
          </div>
          
        </div>
      </div>
    </div>
  )
}



export default Navbars;