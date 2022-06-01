// import React, { useState, useEffect } from 'react'
//import Image1 from '../components/Assests/profile/pro1.png'
import './profile.css'
// import { useNavigate } from 'react-router-dom';

function Profile() {
   
   


  
    
    return (
        <div className='holeProfile'>

            <div className='container profcont'>
                <div className='row edit'>
                    <div className='col-md-2 '> </div>
                    <div className='col-md-5'>
                      
                        <p className='fnaame'>fullnamesar</p>
                        {/* <h4>{detail.fullName}</h4> */}

                    </div>
                    <div className='col-md-5'>
                       

                    </div>
                </div>

                <div className='row edit'>
                    <div className='col-md-2'></div>
                    <div className='col-md-10 promd1'>
                        <p className='abou'>Order History</p>


                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 promd2'>
                        <p>User Id:</p>
                        <p> First Name:</p>
                        <p> Last Name:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Purchase amount:</p>
                        <p>Purchase address:</p>
                    </div>

                    <div className='col-md-6 promd3'>
                        <p>4242354345435</p>
                        <p>saravana</p>
                        <p>R</p>
                        <p>mail</p>
                        <p>phonenumber</p>
                        <p>purchase amount</p>
                        <p>purchase address kellea</p>
                        {/* <p>{detail._id}</p>
                        <p>{detail.fullName}</p>
                        <p>{detail.mail}</p>
                        <p>{detail.phonenumber}</p> */}


                    </div>
                </div>

            </div>


        </div>
    )
}

export default Profile
