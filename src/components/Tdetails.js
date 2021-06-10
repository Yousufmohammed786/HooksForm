import React, { useRef } from 'react';


const Tdetails =(props) =>{
	
	return (
        <>
          <div className="col-md-6 p-3">
            <div class="p-2 bg-light border">Tender Details</div>
              <div className=" border border-light border-2">
              <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                  <label for="ed">Tender Date </label>
                  <input type="date" class="form-control"
                    onChange={props.handleChange} name="tenderD" min="2021-04-01" max="2025-04-20" required/>
                    {props.errors.tenderD && <p className="text-danger">{props.errors.tenderD}</p>}
                  </div>
                  <div className="col-md-6 p-3">
                  <label for="ed">Contract Expiry Date </label>
                  <input type="date" class="form-control" 
                    onChange={props.handleChange}  name="ced" min="2021-04-01" max="2025-04-20" required/>
                  {props.errors.ced && <p className="text-danger">{props.errors.ced}</p>}
                  </div>

                </div>

                <div class="form-group d-inline-flex p-2 w-100 " >
       
                  <div className="col-md-6 p-3">
                   
                  <label for="role">Sales Funel Stage</label>
                    <br></br>
                    <select id="sfs" name ="sfs" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.sfs && <p className="text-danger">{props.errors.sfs}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                  <label for="role">Contact Length</label>
                    <br></br>
                    <select id="cl" name ="cl" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.cl && <p className="text-danger">{props.errors.cl}</p>}
                  </div>
                </div>

                <div class="form-group d-inline-flex p-2 w-100 " >
       
                  <div className="col-md-6 p-3">
                   
                  <label for="role">Level of Priority</label>
                    <br></br>
                    <select id="lp" name ="lp" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.lp && <p className="text-danger">{props.errors.lp}</p>}
                  </div>

                  <div className="col-md-6 p-3 ">
                  <label for="role">Type of Sprint</label>
                    <br></br>
                    <select id="ts" name ="ts" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.ts && <p className="text-danger">{props.errors.ts}</p>}
                  </div>

                </div>

                <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                    <label for="lcd">Level of Confidence on Tender Date </label>
                    <input
                      type="text"
                      class="form-control"
                      name='username'
                      value={props.values.lcd}
                      onChange={props.handleChange}
                    />
                       {props.errors.lcd && <p className="text-danger">{props.errors.lcd}</p>}
                  </div>
                  

                </div>
              </div>
              </div>
              
              
        </>
	);
}
export default Tdetails;