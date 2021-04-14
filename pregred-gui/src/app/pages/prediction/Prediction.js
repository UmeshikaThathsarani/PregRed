import React from 'react';
import Amplify from 'aws-amplify';
import config from './../aws-exports';
// import Popup from "reactjs-popup";
import './Prediction.css';

Amplify.configure(config);

function Alert() {
  alert("Hello")
}
  function Prediction() {
    
     return(
     
    <div className="container-prediction">
     <div className="container-predict-input">
    
     <form onSubmit={Alert}>
     <div className="container-predict-header">
           <h2> Prediction Form1 </h2>
   </div>
       <div className="container-predict-form">
         <h3>Please fill the following information.</h3>
      <div className="container-predict-div-left">
        <h3>1. Age <input type="number" id="age" name="age"/></h3>
        <h3>2. Gravidity <input type="number" id="gravidity" name="gravidity"/></h3>
        <h3>3. Blood Pressure <input type="number" id="BP" name="BP"/></h3>
        <h3>4. Height (Enter height in cm)<input type="number" id="height" name="height"/></h3>
        <h3>5. BMI<input type="number" id="BMI" name="BMI"/></h3>
        <h3>6. Blood Sugar <input type="number" id="BS" name="BS"/></h3>
        <h3>7. Haemoglobin <input type="number" id="Hb" name="Hb"/></h3>
      </div>


      <div className="container-predict-div-right">
          <h3>8. Consanguinity </h3>
          &nbsp;&nbsp;<input type="radio" id="yes" name="yes_no" value="Yes" checked/>Yes      
          &nbsp;&nbsp;<input type="radio" id="no" name="yes_no" value="No"/>No<br/>
          <h3>9. Rubella Immunization </h3>
          &nbsp;&nbsp;<input type="radio" id="yes1" name="yes_no1" value="Yes1"/>Yes  
          &nbsp;&nbsp;<input type="radio" id="no1" name="yes_no1" value="No1"/>No<br/>
          <h3>10. Folic Acid </h3>
          &nbsp;&nbsp;<input type="radio" id="yes2" name="yes_no2" value="Yes2"/>Yes 
          &nbsp;&nbsp;<input type="radio" id="no2" name="yes_no2" value="No2"/>No<br/>
          <h3>11. Subfertility </h3>
          &nbsp;&nbsp;<input type="radio" id="yes3" name="yes_no3" value="Yes3"/>Yes  
          &nbsp;&nbsp;<input type="radio" id="no3" name="yes_no3" value="No3"/>No<br/>
          <h3>12. Cardiac Disease </h3>
          &nbsp;&nbsp;<input type="radio" id="yes4" name="yes_no4" value="Yes4"/>Yes 
          &nbsp;&nbsp; <input type="radio" id="no4" name="yes_no4" value="No4"/>No<br/>
          <h3>13. Thyroid Disease </h3>
          &nbsp;&nbsp;<input type="radio" id="yes5" name="yes_no5" value="Yes5"/>Yes 
          &nbsp;&nbsp; <input type="radio" id="no5" name="yes_no5" value="No5"/>No<br/>
      </div></div>
      <div className="container-predict-submit">
      
      <input type="submit" value="Submit" />
      </div>
      </form>
      </div>

      <div className="container-predict-output"/>
      
    </div>

    
  )

  }
 export default Prediction;

