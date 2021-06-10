
import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CCdetails from './components/CCdetails';
import Engdetails from './components/Engdetails';
import Mdetails from './components/Mdetails';
import Tdetails from './components/Tdetails';

const FormSignup = ({ submitForm }) => {
 
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
   <>
     <div className="navbar float-md-end  p-1"  > 
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person float-md-en" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
</div>
     
         <form onSubmit={handleSubmit} className='' noValidate>
         <div className="row"  >     
       
       
              <CCdetails handleChange={handleChange} handleSubmit ={handleSubmit} values={values} errors={errors}/>
              <Engdetails handleChange={handleChange} handleSubmit ={handleSubmit} values={values} errors={errors}/>
              <Mdetails handleChange={handleChange} handleSubmit ={handleSubmit} values={values} errors={errors}/>
              <Tdetails handleChange={handleChange} handleSubmit ={handleSubmit} values={values} errors={errors}/>
            
              
        </div>
        
              
        <button class="btn btn-secondary float-right w-20 float-md-end ms-2">save</button>
        <input id="Cancel" type="button" className="btn btn-secondary float-md-end " value="Cancel"/>
       
         
       
        
        </form>
       
      
 </>
    
  );
};

export default FormSignup;
