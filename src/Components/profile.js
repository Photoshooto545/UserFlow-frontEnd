import React from 'react'
import './profile.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';

const Profile = () => {
    return (
        <>
        <div className = "main-div">

        
            <div className ="profile">

            <div className="profile-arrow">
            <AiOutlineArrowLeft className = "arrow"/>
            <h1 className="heading">Profile</h1>
            </div>
            
                <div className="box">
                    <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Logout</a></li>
                    </ul>
                </div>

            </div>

            
            <div className="Photographer">
                 <div className="title">Photographer</div>
                
                <form action="">
                <div className="details">     

              
                 <div className="form">
                      <label className="label-class" htmlFor="firstname">First Name</label>
                      <div className="edit">
                      <input className="input-class" type ="text" name="firstname" id ="firstname" placeholder="john"/>
                     < FaRegEdit className="edit-btn"/>
                      </div>
                 </div> 
                 
                 <div className="form">
                      <label className="label-class" htmlFor="phoneno">Phone No</label >
                      <div className="edit"> 
                      <input className="input-class" type ="number" name="phoneno" id ="phoneno" placeholder="+91 7658943261"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div> 
                 <div className="form">
                      <label className="label-class" htmlFor="address">Address</label >
                      <div className="edit"> 
                      <input className="input-class" type ="text" name="address" id ="address" placeholder="h-no-20 vidya nagar"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div> 
                 <div className="form">
                      <label className="label-class" htmlFor="state">State</label>
                      <div className="edit"> 
                      <input className="input-class" type ="text" name="state" id ="state" placeholder="Andara Pardesh"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div> 
                 <div className="form">
                      <label className="label-class" htmlFor="pincode">Pincode</label >
                      <div className="edit"> 
                      <input className="input-class" type ="number" name="pincode" id ="pincode" placeholder="867541"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div> 
                 <div className="form">
                      <label className="label-class" htmlFor="secondname">Second Name</label >
                      <div className="edit"> 
                      <input className="input-class" type ="text" name="secondname" id ="secondname" placeholder=" Doe"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div>
                 <div className="form">
                      <label className="label-class" htmlFor="email">Email</label >
                      <div className="edit"> 
                      <input className="input-class" type ="email" name="email" id ="email" placeholder="abc@gmail.com"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div>
                 <div className="form">
                      <label className="label-class" htmlFor="city">City</label>
                      <div className="edit"> 
                      <input className="input-class" type ="text" name="city" id ="city" placeholder="koroll"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div>
                 <div className="form">
                      <label className="label-class" htmlFor="studioname">Studio Name</label >
                      <div className="edit"> 
                      <input className="input-class" type ="text" name="studioname" id ="studioname" placeholder="Lenses"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div>
                 <div className="form">
                      <label className="label-class" htmlFor="password">Password</label >
                      <div className="edit"> 
                      <input className="input-class" type ="password" name="password" id ="password"/>
                      < FaRegEdit className="edit-btn"/>
                      </div>
                 </div>

                 </div>

                 <div className="btn">
                
                <input  className="buton" type="submit" value="Logout"/>
                 </div>

                </form>

            </div>

            <div className="pic">
            < FaRegEdit className="edit-btn2"/>
            </div>

        </div>
            
        </>
    )
}

export default Profile
