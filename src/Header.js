import React from 'react';
import drops from './public/drops.jpg';



const Header = () => {
    return (

 <div className="well">
  <div className="row">
    <div className="col-xs-2"><img src ={drops}  alt ="Little Drops" className="img-rounded"  width={100} height={80}   /
    >  
    </div>
    <div className="col-xs-8"><h2>Vaccination Tracker for Siruthuligal Foundation</h2></div>
    <div className="col-xs-2"><span className="pull-right">Contact : 999-999-999  <br /> siruthuligal@gmail.com</span></div>
  </div>
</div>
    );

   

}

export default Header;
