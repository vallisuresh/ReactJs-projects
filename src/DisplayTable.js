import React from 'react';
import DisplayRecords from './DisplayRecords';

const DisplayTable =({reco,press}) =>{
    return(    
        <table className="table table-striped table-bordered">
         <thead>
              <tr>
              <th styles={{width:'15%'}}>Id</th>
              <th styles={{width:'15%'}}>KidName</th>
              <th styles={{width:'10%'}}>Age</th>
              <th styles={{width:'10%'}}>Gender</th>
              <th styles={{width:'10%'}}>Mother Name</th>
              <th styles={{width:'10%'}}>Father Name</th>
              <th styles={{width:'10%'}}>Address</th>
              <th styles={{width:'10%'}}>Phone</th>
              <th styles={{width:'10%'}}>School Name</th>
              <th styles={{width:'10%'}}>Doc Name</th>
              <th styles={{width:'10%'}}>Vaccination</th>      
              </tr>
           </thead>
            <tbody>
                {reco.map((recc,index) =>
                  <DisplayRecords key={index} rec={recc} handleC={press} />
                )};    
              </tbody>                       
     </table>
       
    );
   }

   export default DisplayTable;