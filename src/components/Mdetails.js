import React, { useRef } from 'react';


const Mdetails =(props) =>{
	
	return (
        <>
          <div className="col-md-6 p-3">
            <div class="p-2 bg-light border">Mining Details</div>
              <div className=" border border-light border-2">
                <div class="form-group d-inline-flex p-2 w-100 " >
                <div className="col-md-6 p-3 ">
                  <label for="location">Location</label>
                    <br></br>
                    <select id="location" name ="selection" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.location && <p className="text-danger">{props.errors.location}</p>}
                  </div>              

                <div className="col-md-6 p-3 ">
                  <label for="mr">Mine Region</label>
                    <br></br>
                    <select id="mr" name ="selection" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.mr && <p className="text-danger">{props.errors.mr}</p>}
                  </div>
              </div>

              <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                    <label for="fullname">Diesel valume</label>
                    <input
                      type="text"
                      class="form-control"
                      name='dv'
                      value={props.values.dv}
                      onChange={props.handleChange}
                    />
                       {props.errors.dv && <p className="text-danger">{props.errors.dv}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                  <label for="fullname">Volume of Mine</label>
                    <input
                      type="text"
                      class="form-control"
                      name='vm'
                      value={props.values.username}
                      onChange={props.handleChange}
                    />
                       {props.errors.vm && <p className="text-danger">{props.errors.vm}</p>}
                  </div>

                </div>
              
              <div class="form-group d-inline-flex p-2 w-100 " >
                <div className="col-md-6 p-3 ">
                  <label for="mt">Mine Type</label>
                    <br></br>
                    <select id="mt" name ="selection" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.mt && <p className="text-danger">{props.errors.mt}</p>}
                  </div>              

                <div className="col-md-6 p-3 ">
                  <label for="mr">Ore type</label>
                    <br></br>
                    <select id="ore" name ="ore" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.ore && <p className="text-danger">{props.errors.ore}</p>}
                  </div>
              </div>

                <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                    <label for="fullname">Segment</label>
                    <input
                      type="text"
                      class="form-control"
                      name='seg'
                      value={props.values.seg}
                      onChange={props.handleChange}
                    />
                       {props.errors.seg && <p className="text-danger">{props.errors.seg}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                    <label for="numM">Numbers of Mines </label>
                    <input
                      type="text"
                      class="form-control"
                      name='numM'
                      value={props.values.numM}
                      onChange={props.handleChange}
                    />
                       {props.errors.numM && <p className="text-danger">{props.errors.numM}</p>}
                  </div>

                </div>
              </div>
              </div>
              
              
        </>
	);
}
export default Mdetails;