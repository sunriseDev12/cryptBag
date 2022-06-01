import React, { useState} from 'react'
// import NoProduct from '../components/Assests/logo/noproduct.png'
import './checkout.css'
// import { useNavigate } from 'react-router-dom';





function Checkout() {

    // const navigate = useNavigate();
    const [user] = useState(localStorage.getItem('FullProducts'));
    // setuser(obje);
    const [pricechoose, setpricechoose] = useState('');
    // const [pricechoose1, setpricechoose1] = useState('');
    const [tokenchoose, settokenchoose] = useState('');
    const [tokentype, settokentype] = useState('');
    // user= localStorage.getItem('id');

    function ContinueCart() {

        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            
            customer:user ,
            pricechoose:tokentype==="noncrypto"?pricechoose:null,
            tokenchoose:tokentype==="crypto"?pricechoose:null,
         

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };






        fetch("http://localhost:8099/purchase", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("res", result);

               


                if (result.status === true) {
                    alert("purchase success successfully !");
                    // navigate('/che');

                }
            })
            settokentype("")
        // navigate('/home');
    }



    // const [obje] = useState(JSON.parse(localStorage.getItem('FullProducts')));
    // console.log("obje",obje);
    // const [detail, setdetail] = useState([]);
    // useEffect(() => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     var raw = JSON.stringify({
    //         _id: obje,
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8099/profile", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             // alert(JSON.stringify(result.description[0]))
    //             console.log("res4", result.description);
    //             // console.log("local cart",detail[0].category)
    //             console.log("local cart",detail)
    //             setdetail(result.description);

    //         })
    // }, [])

    const [obje] = useState(JSON.parse(localStorage.getItem('FullProducts')));
    // setuser(obje);
   
    
    return (
        <div>
            <div className='container-fluid  fullgrid'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8'>
                                <p className='chechHEad'>CHECKOUT</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5'></div>
                            <div className='col-md-7'>
                                <img src={require('../components/Assests/jacket/' + obje[0].prod_image1)} alt="product not available" className="productNull" />
                                {/* <img src={NoProduct} alt="product not available" className="productNull"/> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5'></div>
                            <div className='col-md-7'>
                                {/* <p className='noPRoduct'>{obje[0].name}</p> */}
                                {/* <p className='noPRoduct'>You Have no orders</p> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8'>
                                <button className='purchase' onClick={()=>{
                                    if(tokentype!==''){
                                        ContinueCart()
                                    }else{
                                        alert("choose aleast one price")
                                    }
                                  }}>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        {/* <p>section 2</p> */}
                        <div className='container rightgrid'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>

                                    <p className='order'>Order Summary</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>
                                    <p className='orderValue'>0 Items</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Product name</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{obje[0].name}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Price</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{obje[0].price}</p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Token</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{obje[0].token}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Product category</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{obje[0].category}</p>
                                </div>
                                {/* <div className='col-md-1'>

        </div>
        <div className='col-md-9'>
        <p className='productDisplay'>Please select atlest one product</p>
        </div>
        <div className='col-md-2'></div> */}

                            </div>
                            <hr></hr>


                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Sub Total In</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>$0.00000  </p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'>
                                    <p>Delivery</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>Free</p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'>
                                    <p>Total to Pay in</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>$0.000</p>
                                </div>
                            </div>
                            <hr></hr>

                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>
                                    <p className='pay'>Payment Option</p>
                                </div>
                            </div>

                            {/* <div className='row'>
                              <div className='col-md-4'></div>
                              <div className='col-md-5'>
                                  <input type="radio" id="amout1" value="Bike" />
                                  <label for="radiovalue1" className='rate1'>0.0000 BNB</label>
                              </div>
                              <div className='col-md-3'></div>
                          </div>
                          <div className='row'>
                              <div className='col-md-4'></div>
                              <div className='col-md-5'>
                                  <input type="radio" id="amount2" value="Bike" />
                                  <label for="radiovalue2" className='rate2'>   0.0000 RS200</label>
                              </div>
                              <div className='col-md-3'></div>
                          </div> */}

                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'> <button className='productBtn'  value={pricechoose} onClick={() => {
                                    settokentype("noncrypto")
                                    setpricechoose(obje[0].price)}}>{obje[0].price}</button> </div>
                                <div className='col-md-5'>

                                    <button className='productBtn2'  value={tokenchoose}  onClick={() =>{ 
                                        settokentype("crypto")
                                     settokenchoose(obje[0].token)}}>{obje[0].token}</button>
                                </div>

                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout