import React, { useRef } from 'react';


const CCdetails =(props) =>{
	
	return (
        <>
          <div className="col-md-6 p-3">
            <div class="p-2 bg-light border">Customer Contact Details</div>
              <div className=" border border-light border-2">
                <div class="form-group d-inline-flex p-2 w-100 " >
       
                  <div className="col-md-6 p-3">
                   
                    <label for="fullname">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name='username'
                      value={props.values.username}
                      onChange={props.handleChange}
                    />
                       {props.errors.username && <p className="text-danger">{props.errors.username}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                  <label for="role">Role of Contact</label>
                    <br></br>
                    <select id="role" name ="selection" class="btn border dropdown-toggle w-100 " 
                      onChange={props.handleChange}>
                      <option value="empty"></option>
                      <option value="Permanent">Permanent</option>
                      <option value="Temp">Temp</option>
                      <option value="Contact">Contact</option>
                    </select>
                    {props.errors.selection && <p className="text-danger">{props.errors.selection}</p>}
                  </div>
                </div>

                <div class="form-group d-inline-flex p-2 w-100" >
                  <div className="col-md-6 p-3">
                    <label for="fullname">Contact Number</label>
                    <input
                      type="text"
                      class="form-control"
                      name='cn'
                      value={props.values.cn}
                      onChange={props.handleChange}
                    />
                       {props.errors.cn && <p className="text-danger">{props.errors.cn}</p>}
                  </div>
                  <div className="col-md-6 p-3 ">
                    <label for="email">E-mail </label>
                    <input
                      type="text"
                      class="form-control"
                      name='email'
                      value={props.values.email}
                      onChange={props.handleChange}
                    />
                       {props.errors.email && <p className="text-danger">{props.errors.email}</p>}
                  </div>

                </div>
              </div>
              </div>
              
              
        </>
	);
}
export default CCdetails;