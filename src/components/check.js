import React, { useState } from 'react'
import './check.css'
import { ToastContainer, toast, Flip, Slide, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Check() {
    const navigate = useNavigate();
    const [phone, setphone] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [company, setcompany] = useState('');
    const [address, setaddress] = useState('');
    const [apartment, setapartment] = useState('');
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [state, setstate] = useState('');
    const [pincode, setpincode] = useState('');
    const [mail, setmail] = useState('');
    const [obje] = useState(localStorage.getItem('id'));


    function SubCheck() {



        if (phone !== '') {
            if (fname !== '') {
                if (lname !== '') {
                    if (address !== '') {
                        if (city !== '') {
                            if (country !== '') {
                                if (state !== '') {
                                    if (pincode !== '') {

                                        var myHeaders = new Headers();

                                        myHeaders.append("Content-Type", "application/json");

                                        var raw = JSON.stringify({

                                            fname: fname,
                                            lname: lname,
                                            phone: phone,
                                            company: company,
                                            address: address,
                                            apartment: apartment,
                                            city: city,
                                            country: country,
                                            state: state,
                                            pincode: pincode,
                                            mail: mail,
                                            user: obje,

                                        });

                                        var requestOptions = {
                                            method: 'POST',
                                            headers: myHeaders,
                                            body: raw,
                                            redirect: 'follow'
                                        };






                                        fetch("http://localhost:8099/address", requestOptions)
                                            .then(response => response.json())
                                            .then(result => {
                                                console.log("res", result);




                                                if (result.status === true) {
                                                    alert("address added successfully !");
                                                    navigate('/checkout');

                                                }
                                            })
                                      
                                    } else {
                                        toast.error('Enter pincode!', {
                                            position: "top-right",
                                            transition: Slide,
                                            theme: 'light',
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined

                                        });
                                    }

                                } else {
                                    toast.error('Enter state!', {
                                        position: "top-right",
                                        transition: Slide,
                                        theme: 'light',
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined

                                    });
                                }

                            } else {
                                toast.error('Enter country!', {
                                    position: "top-right",
                                    transition: Flip,
                                    theme: 'light',
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined

                                });
                            }

                        } else {
                            toast.error('Enter city!', {
                                position: "top-right",
                                transition: Slide,
                                theme: 'light',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined

                            });
                        }

                    } else {
                        toast.error('Enter Address!', {
                            position: "top-right",
                            transition: Slide,
                            theme: 'light',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined

                        });
                    }

                }
                else {
                    toast.error('Enter Last Name!', {
                        position: "top-right",
                        transition: Bounce,
                        theme: 'light',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined

                    });
                }

            } else {
                // fname
                toast.error('Enter First Name!', {
                    position: "top-right",
                    transition: Bounce,
                    theme: 'light',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined

                });
            }

        } else {
            toast.error('Enter phone number!', {
                position: "top-right",
                transition: Slide,
                theme: 'light',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined

            });
        }






    }


    return (
        <div className='holeChec'>

            <div className='container checkContainer'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='row'>
                            <p className='check01'>Check Out</p>
                        </div>

                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-10'>
                                <p className='checkContact'>Contact Information</p>
                            </div>
                            {/* <div className='col-md-6'>
                            <p className='alert'>Already have an accout? <a className='loginA' href='#alee' >Login!</a></p>
                            </div> */}
                        </div>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <input className='getCheckMobile' type="text" placeholder="Mobile number or Email " value={phone} onChange={(e) => setphone(e.target.value)} />
                            </div>
                            <div className='col-md-2'></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <input className='firstCheck' type="text" placeholder="First Name" value={fname} onChange={(e) => setfname(e.target.value)} />
                            </div>
                            <div className='col-md-4'>
                                <input className='firstCheck1' type="text" placeholder="Last Name" value={lname} onChange={(e) => setlname(e.target.value)} />
                            </div>
                            <div className='col-md-2'></div>
                        </div>


                        {/* <div className='row'>
                        <div className='col-md-2'></div>
                              <div className='col-md-8'>
                                  <input type="checkbox" id="mailCheck"  value="Bike"/>
                                      <label for="mailCheck1" className='chekMail1'> Email with me news and offers</label>
                              </div>
                              <div className='col-md-2'></div>
                        </div> */}

                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <p className='adressCheck'>Shipping Address</p>
                            </div>
                            <div className='col-md-2'></div>
                        </div>



                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <input className='companyCheck' type="text" placeholder="Company(Optinal)" value={company} onChange={(e) => setcompany(e.target.value)} />
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <input className='aadressCheck' type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <input className='apartCheck' type="text" placeholder="Apartment, Suite, etc(optional)"
                                    value={apartment} onChange={(e) => setapartment(e.target.value)} />
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-3'>
                                <input className='cityCheck' type="text" placeholder="City" value={city} onChange={(e) => setcity(e.target.value)} />
                            </div>
                            <div className='col-md-2'>
                                <input className='countryCheck' type="text" placeholder="Country" value={country} onChange={(e) => setcountry(e.target.value)} />
                            </div>

                            <div className='col-md-3'>
                                <input className='stateCheck' type="text" placeholder="State" value={state} onChange={(e) => setstate(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>

                                <input className='pinCheck' type="number" placeholder="Pincode" value={pincode} onChange={(e) => setpincode(e.target.value)} />
                            </div>
                            <div className='col-md-6'>
                                {/* <select className="countryCheck" id="country11">
                                      <option >Country</option>
                                      <option value="India">India</option>
                                      <option value="Us">Us</option>
                                      <option value="Japan">Japan</option>
                                      <option value="German">German</option>
                                  </select> */}

                                <input type="checkbox" id="mailCheck2" value={mail} onChange={(e) => setmail(e.target.value)} />
                                <label for="checkMail2" className='mailCheck2' > Email with me news and offers</label>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'></div>

                            <div className='col-md-8'>
                                <button className='btnCheck' onClick={SubCheck}>Continue</button>
                            </div>
                        </div>








                    </div>
                </div><ToastContainer />
            </div>
        </div>
    )
}

export default Check