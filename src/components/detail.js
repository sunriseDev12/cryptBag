import React,{useState,useEffect} from 'react'
import './detail.css'
// import Image1 from '../components/Assests/jacket/2jack1.jpg'
// import Image2 from '../components/Assests/jacket/2jack2.jpg'
// import Image3 from '../components/Assests/jacket/2jack3.jpg'
// import Image4 from '../components/Assests/jacket/2jack4.jpg'
// import Image5 from '../components/Assests/jacket/2jack5.jpg'
// import Image1 from '../components/Assests/pd1.png'
// import Image2 from '../components/Assests/pd2.png'
// import Image3 from '../components/Assests/pd3.png'
// import Image4 from '../components/Assests/pd4.png'
// import Image5 from '../components/Assests/pd5.png'
import { useNavigate } from 'react-router-dom';

function Detail() {
    // const [cart, setCount] = useState(0);
    // function AddtoCart(){    
    //     // let carts = cart + 1;
    //     let obje = [];
       
    //     // if(localStorage.getItem('Products1')){
    //       obje = JSON.parse(localStorage.getItem('FullProducts'));
    //     // }
        
    //      console.log('obje',JSON.stringify(obje));
    //      var arr = JSON.stringify(obje)
    //      arr.push()
    //     localStorage.setItem('Products1',arr );
        
    
    // }



    function AddtoCart(){  


        // let obje = JSON.parse(localStorage.getItem('CartItem'));
       
        
        // console.log("dfsdf",obje);
        // obje.push({CartItem})


        setCartdata([...cartdata,detail[0]]) ;
           localStorage.setItem('CartItem',JSON.stringify([...cartdata,detail[0]]));
        
       
        console.log("localcartdata",localStorage)
        //  console.log("caartadding details",cartdata) ;   
    }

    const navigate = useNavigate();
    
 
    function Buying(){
        // localStorage.setItem('CartItem',JSON.stringify([...cartdata,detail[0]]));
        navigate('/check');

    }

    function SubCart(){
        navigate('/cart')
    }
    function BuyDetails(){
        navigate('/checkout')
    }

    // localStorage.setItem("Products",JSON.stringify(obje[0]._id))JSON.parse
    const [obje] = useState(JSON.parse(localStorage.getItem('Products')));
    console.log("obje",obje);
    const [detail, setdetail] = useState([]);
    alert(JSON.stringify(localStorage.getItem('CartItem')))
    const [cartdata, setCartdata] = useState([]);
    // const [sizetype, setsizetype] = useState('');
    // const [size, setsize] = useState('');
    // const [cartdata, setCartdata] = useState([]);
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            _id: obje,
            // size:sizetype=="S"?size:null,
            // size:sizetype=="M"?size:null,
            // size:sizetype=="L"?size:null,
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
                // console.log("size",sizetype)
                // console.log("local cart",detail[0].category)
                console.log("local cart",detail)
                setdetail(result.description);

            })
    }, [])

   
    return (
        <div className='rough'>
            <div className='container cont1'>
            {detail.map((value) => {
                                  return(
                                      <div>
                <div className='row'>
                    <div className='col-md-5'>
                        {/* leftContent */}
                        <div className='container cont2'>
                        
                           
                                <div className='row leftSmall'>
                                    <div className='col-md-4'>
                                        {/* <h2>left small image</h2> */}
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <img src={require('../components/Assests/jacket/'+value.prod_image1)} alt="img1" className='detail1' />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <img src={require('../components/Assests/jacket/'+value.prod_image2)} alt="img1" className='detail1' />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <img src={require('../components/Assests/jacket/'+value.prod_image3)} alt="img1" className='detail1' />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <img src={require('../components/Assests/jacket/'+value.prod_image4)} alt="img1" className='detail1' />
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {/* <p>right big  image</p> */}
                                        <div className='row'>
                                            
                                            <div className='col-md-12'>
                                                {/* <img src={require('../components/Assests/jacket/'+detail.prod_image1)} alt="img1" className='detail2' /> */}
                                                <img src={require('../components/Assests/jacket/'+value.prod_image1)} alt="img1" className='detail2' />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            





                        </div>
                    </div>
                    <div className='col-md-7 right2Full'>
                        {/* rightContent */}
                        <div className='container'>
                              

                                    
                                      
                                     
                            <div className='row'>
                                <div className='col-md-6 leftsides'>
                                    
                                        <p className='detailProduct'>{value.category}</p>
                                        </div>

                                        <div className='col-md-6 rightsides'>
                                        <i class="fa fa-shopping-cart cart" aria-hidden="true" onClick={SubCart}>
                                        <p className='cartval'>{cartdata.length}</p></i>
                                        {/* <i class="fa fa-shopping-cart cart" aria-hidden="true" onClick={() => cartitem()}></i> */}
                                   
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <p className='detailProductName'>{value.name}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='rateSplit'>
                                        <p className='detailProductPrice'>Price-</p>
                                        <p className='detailProductAmount'>{value.token}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <p className='detailProductSize'>Size</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-3'>
                                    <button className='size1 '>S</button>
                                    {/* onClick={()=>{ setsizetype("S")}} */}
                                </div>
                                <div className='col-md-3'>
                                    <button className='size2'>M</button>
                                </div>
                                <div className='col-md-4'>
                                    <button className='size3'>L</button>
                                </div>
                                <div className='col-md-1'></div>
                            </div>


                            <div className='row'>
                                <div className='col-md-4'></div>
                                <div className='col-md-8'>
                                    <button className='btnBuy' onClick={BuyDetails}>BUY NOW</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'></div>
                                <div className='col-md-8'>
                                    <button className='btnBuy' onClick={AddtoCart}>Add to cart</button>
                                </div>
                            </div>

                            <div className='row checking'>
                                <div className='col-md-1 align1'>
                                <i  class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                                <div className='col-md-1 align2'>
                                <p className='detailTotalItem'>{cartdata.length}</p>
                                </div>
                                <div className='col-md-2 align3'>
                                <p className='detailItem'>Items</p>
                                </div>
                                <div className='col-md-3 align4'>
                                {/* <p className='detailItemPrice'>{}</p> */}
                                <p className='detailItemPrice'>{value.token}</p>
                                </div>
                                <div className='col-md-5'>
                                <button className='btnBuyCheckOut' onClick={Buying}>Checkout</button>
                                </div>
                            </div>
                            </div>

                          
                        </div>
                       
                    
                    
                    </div>
                </div>
        )})}
            </div>
        </div>
    )
}

export default Detail