import React,{useEffect,useState} from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom';
// import Image1 from '../components/Assests/newLogo.png'

function Cart() {
    const navigate =useNavigate();
    function ContinueCart(){
        navigate('/check');
    }

    const [obje] = useState(JSON.parse(localStorage.getItem('Products')));
    console.log("obje",obje);
    const [detail, setdetail] = useState([]);
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            _id: obje,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8099/profile", requestOptions)
            .then(response => response.json())
            .then(result => {
                // alert(JSON.stringify(result.description[0]))
                console.log("res4", result.description);
                // console.log("local cart",detail[0].category)
                console.log("local cart",detail)
                setdetail(result.description);

            })
    }, [])


    return (
        <div className='holeCart'>
            <div className='container cartContainer'>
            {detail.map((Carting) => {
                    return(
                        <>

                <div className='row'>
                    <div className='col-md-12'>
                    </div>
                </div>
                <div className='row cartRow'>
                    <div className='col-md-5'> </div>
                    <div className='col-md-7'>
                        <p className='cartHead'>CART</p>
                    </div>

                </div>

                <div className='row'>
               
                       
                        
                    <div className='col-md-2'></div>
                    <div className='col-md-8 '>
                   
                        <div className='rig'>
                            <p className='describe leftContent'>Description</p>
                            <p className='product rightContent'>{Carting.name}</p>
                            {/* <p className='product rightContent'>Conquery</p> */}
                            </div> 
                            <hr></hr> 
                        <div className='rig'>
                            <p className='price leftContent'>Price</p>
                            <p className='price1 rightContent'>{Carting.token}</p>
                            </div> 
                            <hr></hr> 
                        <div className='rig'>
                            <p className='quantity leftContent'>Quantity</p>
                            <p className='quantity1 rightContent'>1</p>
                            </div> 
                            <hr></hr> 
                        <div className='rig'>
                            <p className='total leftContent'>Total</p>
                            <p className='total1 rightContent'>{Carting.token}</p>
                            </div> 
                            <hr></hr> 
                        <div className='rig'>
                            <p className='subtotal leftContent'>Sub Total</p>
                            <p className='subtotal1 rightContent'>{Carting.token}</p>
                            </div> 
                            
                            </div>

                    <div className='col-md-2'></div>
                </div>

                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-7'>
                        <p className='shipTax'>Shipping, Taxes and discount codes caluculate at checkout</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>

                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                        <button className='cartBtn'  onClick={ContinueCart}>Check Out</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5'></div>
                    <div className='col-md-7'>
                       <a href='/home' className='continueShop'>CONTINUE SHOPPING</a>
                    </div>
                </div><br></br>
                </> )})}
            </div>
         
                   
        </div>
    )
}

export default Cart