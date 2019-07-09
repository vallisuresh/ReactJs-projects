import React from 'react';
//import logo from './assets/react-router-logo.png';
//import {PropTypes} from 'prop-types';

const School = (props) => {
    return(

    
        <form id ="MyForm" className="container">

         <h3 > Enter Health Records from  Elementary School </h3>

         

          <div className="row">   
               <div className="col-25">
                 <label  >Kid's name </label>
                </div>
            <div className="col-75">  
                 <input type="text"  name="KidName"
                  value={props.name}  onChange={props.handleOnChange}
                  placeholder="Enter the Kids Name"/>    
              </div>   
           </div>
               

           <div className="row">   
               <div className="col-25">
                  <label  >Age  </label>
                </div>
                <div className="col-75">
                <select name="Age" 
                   value ={props.Age} 
                   onClick ={props.handleOnChange}>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
             </div>
            </div> 

            
            <div className="row">   
               <div className="col-25">
                  <label >Gender  </label>
                </div>
                <div className="col-75">
                 <select name="Gender" 
                   value ={props.Gender} 
                   onClick ={props.handleOnChange}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>             
                </select>
                </div>
            </div> 


             <div className="row">   
                 <div className="col-25">
                   <label  >Mother's Name</label>
                 </div>
             <div className="col-75">
                 <input type="text"  name="MotherName" 
                 value = { props.MotherName} onChange={props.handleOnChange}
                  placeholder="Enter the name"/>
             </div>
            </div> 


               <div className="row">   
                <div className="col-25">
                 <label >Father's Name</label>
                 </div>
                 <div className="col-75">
                 <input type="text"  name="FatherName" 
                 value ={props.FatherName}  onChange={props.handleOnChange}
                 placeholder="Enter the name"/>
                            </div>
            </div> 


            <div className="row">
                <div className="col-25">
               <label >Phone Number  :</label>
               </div>
               <div className="col-75">
               <input type="text"  name="Phone" 
               value ={props.Phone}  onChange={props.handleOnChange}
               placeholder="Enter the Phone Number"/>
             </div>
          </div>

               <div className="row">   
                 <div className="col-25">
                    <label >School Name</label>
                 </div>
                 <div className="col-75">
                 <input type="text"  name="School" 
                 value ={props.School}  onChange={props.handleOnChange}
                 placeholder="Enter the Address"/>
                          </div>
               </div> 

               
             <div className="row">   
               <div className="col-25">
                   <label  >Vaccination Given</label>
                 </div>
                 <div className="col-75">
                 <textarea name="VaccinationGiven" rows="5" cols="30"
                    value={props.VaccinationGiven}  onChange={props.handleOnChange}
                    placeholder="Enter the Vaccination Name"/>
                            </div>
               </div> 

               <br/>
             <button type="submit" className="btn btn-success"
              onClick ={props.handleOnSubmit}
              > Submit </button>



          
</form>
        

    )
}

export default School;