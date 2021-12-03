import React , {useState} from 'react'
import './style.css'

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <>
        <div className="main">

            <div className="container1">

                <h1 className="heading">Photo selection</h1>
                <p>Select your album photos just with one click</p>

                 <div className="parent">
                     <div className="black"></div>
                     <div className="black"></div>
                     <div className="black"></div>
                 </div>    
               
            </div>



            <div className="container2">

               <form action="">

                  <h2> Log IN </h2>
                  <div className="form1">
                      <label htmlFor="email">Email</label>
                      <input type ="text" name="email" id ="email" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </div>
                 <div className="form1">
                      <label htmlFor="password">Password</label>
                      <input type ="password" name="password" id ="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                 </div> 

                 <div className="form2">
                     <input className="check" type="checkbox"/>
                     <label htmlFor="check" className="p1">Remember Me</label>
                     <a href ="#" className="p2"><p>Forgot Password</p></a>
                 </div>

                 <button type="submit">Log in</button>
                 


                 <p className="p3">Don't have account ? <a className="link" href ="#">Sign Up</a></p>

               </form> 
            </div>
        </div>
            
        </>
    )
}

export default Login
