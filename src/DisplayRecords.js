import React from 'react';
//import {PropTypes} from 'prop-types';


const DisplayRecords = ({rec,handleC}) => {

   let address= (rec.Address === ''? "NA": rec.Address);
   let phone =(rec.Phone === ''? "NA" :rec.Phone);
   let school= (rec.School=== ''? "NA" :rec.School);
   let docname=(rec.DocName === ''? "NA" :rec.DocName);
   let Kidname= rec.KidName ;
   console.log( 'records from display reocrds'+ rec.Id);

    return (
              
        <tr> 
            <td>{rec.Id}</td>
            <td>{rec.KidName}</td>
            <td>{rec.Age}</td>
            <td>{rec.Gender}</td>
            <td>{rec.MotherName}</td>
            <td>{rec.FatherName}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{school}</td>
            <td>{docname}</td>
            <td>{rec.VaccinationGiven}</td>
            <td><button type="submit" className ="btn btn-primary"
             onClick={() => {handleC(Kidname)}} >Del</button></td>
        </tr>
       
    );
}

export default DisplayRecords;