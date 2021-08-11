import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./ContactStyle.css"

function Contact() {
  const {
    register,
    handleSubmit,
   
  } = useForm();
 
  const [sucessMsg, setSucessMsg] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setSucessMsg(true);
}
     
    
  return (

    <>
    <div style={{backgroundColor: "#efebf1", padding: "5% 0 10% 29%"}}>
    
      {!sucessMsg ? (
        <div className="bg_contactFront">
        <form onSubmit={handleSubmit(onSubmit)} style={{textAlign: "center"}}>
        <h2>Send Us a Message.</h2>
         <input className="input" {...register('firstName')} placeholder="First Name"/> 
         <input className="input" {...register('lastName', { required: true })} placeholder="Last Name *" />  
      
         <input className="input" {...register('email' , { required: true })} placeholder="Email Id" />
         <input  className="input"{...register('number' , { required: true })} placeholder="Mobile Number"/> <br/>
         
         <button type='submit' className="btn_front">
            Submit
          </button>
        
         </form>
     </div> 
      ) : (
        <div style={{backgroundColor: "#efebf1", padding: "5% 0px 20% 5%"}} >
        <h1 className="bg_contactBack">We have received your request!</h1>
        
        <form onSubmit={handleSubmit} className='form' noValidate>
          <button type='submit' className="btn_back">
            Go Back
          </button>
        </form>
      </div>
      )}
    </div>
  </>





     
  );
}

export default Contact