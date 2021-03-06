import React, { useState } from 'react';
import './App.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';



function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    
  }
  return (
  <>
   <div className="">
   
   <div className="container ">
     <div className="card border-0 shadow mx-auto"></div>   

     {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        
      
  </div>
  </div>
 
  </>
  )
}

export default App;
