import React,{useEffect, useState} from 'react'
import './home.css'
// import Jack1 from './Assests/jacket/5jack1.png'
// import Jack2 from './Assests/jacket/jack1.jpg'
// import Jack3 from './Assests/jacket/2jack1.jpg'
// import Jack4 from './Assests/jacket/3jack1.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [productvalue1, setproductvalue1] = useState([]);
useEffect(() => {
   
    axios.get('http://localhost:8099/viewproducts')
    .then(function (res)
    {
        const productvalue = res.data.description;
        
        // console.log(productvalue)
        setproductvalue1(productvalue)

        
    })
    .catch(function (error){
       

    })  

    // .then(result => {
    //     console.log("res", result);
    //     localStorage.setItem('id', result.data.description[0]._id)

    //     console.log("logid",result.data.description[0]._id)                      
    // })

    
    .then(function(){
        
        //always executed
    })

},[])
   
    const navigate = useNavigate();
    // const [cart, setCount] = useState(0);



    // function NextPage(Products ){    
    //     // let carts = cart + 1;
    //     let obje = [];
    //     if(localStorage.getItem('Products')){
    //       obje = JSON.parse(localStorage.getItem('Products'));
    //     }
    //     obje.push({Products});
    //     console.log("some",obje);
    //     localStorage.setItem('Products', JSON.stringify(obje));
    //     navigate('/detail');
    //     <navbar/>
    
    // }

    function NextPage(Products){
        let obje=[Products];
        localStorage.setItem("Products",JSON.stringify(obje[0]._id));
        localStorage.setItem("FullProducts",JSON.stringify(obje));
        localStorage.setItem("cart",JSON.stringify([]));
        navigate('/detail');
    }

    // function NextPage(){
    
    //         // localStorage.setItem('carting', setproductvalue1.id)
    
    //         // console.log("logid",setproductvalue1.id)  
    //     navigate('/detail');
     
    // }


  return (
    <div className='holeHome'>
        <div className='container-fluid  homeContanier'>
            <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-8'>
                <p className='homeName'>JACKETS</p>
            </div>
            </div>

            <div className='row homeRow1'>
            {/* <div className='col-md-2'></div> */}
            {productvalue1.map((Products) => {
                    return(
                        <>
                {/* <div className='col-md-2 img1hole' onClick={NextPage}> */}
                <div className='col-md-2 img1hole' onClick={() => NextPage(Products)}>
               
                       
                        {
                            Products.prod_image1?
                            <img className='img1' src={require('../components/Assests/jacket/'+Products.prod_image1)} alt="jack1"/>
                            :
                            null
                        }
                    
                    <p className='img1Description'>{Products.name}</p>
                    <p className='img1Unprice'>{Products.price}</p>
                    <p className='img1price'>{Products.token}</p>
                    </div>
                    
                    </>
                    )
                })}
                

                {/* <div className='col-md-2 img2hole' onClick={NextPage}>
                <img className='img2' src={Jack2} alt="jack1"/>

                <p className='img2Description'>Travel jacket</p>
                    <p className='img2Unprice'>$454</p>
                    <p className='img2price'>MW200    12.3434</p>
                </div>
                
                <div className='col-md-2 img3hole'onClick={NextPage}>
                <img className='img3' src={Jack3} alt="jack1"/>

                <p className='img3Description'>CONQUER INSULATED</p>
                    <p className='img3Unprice'>$345</p>
                    <p className='img3price'>MW200   9.8233</p>
                </div>
                
                <div className='col-md-2 img4hole'onClick={NextPage}>
                <img className='img4' src={Jack4} alt="jack1"/>
                <p className='img4Description'> Hrithik Roshan</p>
                <p className='img4Unprice'>$423</p>
                <p className='img4price'>MW200    3.3202</p>
                </div>
                <div className='col-md-2'></div>
            </div>
            <div className='row homeRow2'onClick={NextPage}>
            <div className='col-md-2'></div>
                <div className='col-md-2 img1hole'>
                    <img className='img1' src={Jack3} alt="jack1"/>
                    
                    <p className='img1Description'>Funday Fashion</p>
                    <p className='img1Unprice'>$342</p>
                    <p className='img1price'>MW200    18.3432</p>
                    

                </div>

                <div className='col-md-2 img2hole'onClick={NextPage}>
                <img className='img2' src={Jack1} alt="jack1"/>

                <p className='img2Description'>Travel jacket</p>
                    <p className='img2Unprice'>$323</p>
                    <p className='img2price'>MW200    34.332</p>
                </div>
                
                <div className='col-md-2 img3hole'onClick={NextPage}>
                <img className='img3' src={Jack4} alt="jack1"/>

                <p className='img3Description'>CONQUER INSULATED</p>
                    <p className='img3Unprice'>$344</p>
                    <p className='img3price'>MW200    3.243</p>
                </div>
                
                <div className='col-md-2 img4hole'onClick={NextPage}>
                <img className='img4' src={Jack2} alt="jack1"/>
                <p className='img4Description'> Hrithik Roshan</p>
                <p className='img4Unprice'>$234</p>
                <p className='img4price'>MW200    4.324</p>
                </div> */}
                <div className='col-md-2'></div>
            </div>
        </div>
    </div>
  )
}

export default Home