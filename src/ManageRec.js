import React from 'react';
import {PropTypes} from 'prop-types';
import School from './School';
import Health from './Health';
import { v4 } from 'uuid';
import DisplayTable from './DisplayTable';


class ManageRec extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Id : v4(),
            KidName :"",
            Age:"1",
            Gender:"",
            MotherName:"",
            FatherName:"",
            Phone:"",
            Address:"",
            DocName:"",
            School:"",
            VaccinationGiven:""
  };
         

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
  

  handleOnChange(event){ 
    const {name, value} = event.target
    this.setState({      
        [name] : value     
    })
}

handleClick(name){
    let lists =  JSON.parse(localStorage.getItem('healthRecords'));  
    const healthRecords = lists.filter((list) => {
          return list.KidName !== name
   });

   localStorage.setItem('healthRecords', JSON.stringify(healthRecords));
     this.setState({ 
       state:healthRecords});
}
  
handleOnSubmit(event){
    event.preventDefault();
    const {name, value} = event.target;
     
    this.setState({
      [name]: value 
      });

    if (localStorage.getItem('healthRecords') === null) {
        let healthRecords = [];
        healthRecords.push(this.state);
        localStorage.setItem('healthRecords', JSON.stringify(healthRecords));
        
      } else {
        let healthRecords = JSON.parse(localStorage.getItem('healthRecords'));
        healthRecords.push(this.state);
        localStorage.setItem('healthRecords', JSON.stringify(healthRecords));
       
        
      }
      document.getElementById('MyForm').reset(); 
}
 

  render() {
    

  let goWhere;
          if (this.props.name === 'Health') {
           goWhere =  <Health  props={this.state}  handleOnSubmit={this.handleOnSubmit} handleOnChange ={this.handleOnChange} /> ;
          }
           else if (this.props.name === 'School') { 
           goWhere =  <School props={this.state}  handleOnSubmit={this.handleOnSubmit} handleOnChange ={this.handleOnChange} />;
        } 
        else if (this.props.name === 'Report') { 
          let Records = JSON.parse(localStorage.getItem('healthRecords'));
          goWhere = <DisplayTable reco={Records} press={this.handleClick} /> ;
          
        }

        return(
        <div> {goWhere} </div>
        
      );
    }


}

ManageRec.propTypes = {
   id :PropTypes.string
}

export default ManageRec;
