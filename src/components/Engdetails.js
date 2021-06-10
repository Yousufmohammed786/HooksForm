import React, { useRef } from 'react';


const Engdetails =(props) =>{
	
	return (
        <>
          <div className="col-md-6 p-3">
            <div class="p-2 bg-light border">Engagment details</div>
              <div className=" border border-light border-2">
                <div class="form-group d-inline-flex p-2 w-100 " >       
                 
                  <div className="col-md-6 p-3 ">
                  <label for="soc">Status of Customer</label>
                    <br></br>
                    <select id="soc" name =">StatusofCustomer" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.StatusofCustomer && <p className="text-danger">{props.errors.StatusofCustomer}</p>}
                 
                </div>
                <div className="col-md-6 p-3 ">
                  <label for="es">Engagement Status</label>
                    <br></br>
                    <select id="es" name ="EngagementStatus" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.EngagementStatus && <p className="text-danger">{props.errors.EngagementStatus}</p>}
                  </div>
                </div>

                <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                  <label for="ed">Engagement Date </label>
                  <input type="date" class="form-control"
                    onChange={props.handleChange}  name="party" min="2021-04-01" max="2025-04-20" required/>
   
       
                       {props.errors.party && <p className="text-danger">{props.errors.party}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                    <label for="email">E-mail </label>
                    <input
                      type="text"
                      class="form-control"
                      name='username'
                      value={props.values.username}
                      onChange={props.handleChange}
                    />
                       {props.errors.username && <p className="text-danger">{props.errors.username}</p>}
                  </div>

                </div>
              </div>
              </div>
              
              
        </>
	);
}
export default Engdetails;