// import { null } from 'check-types';
import React, { Component } from 'react';
// import Popup from "reactjs-popup";
import './Prediction.css';
import axios from 'axios';

// function Alert() {
//   alert("Hello")
// }
  class Prediction extends Component {

    constructor(props){
      super(props);
      this.state = {
        age : 29,
        gravidity : 2,
        bldPre : 0,
        height: 154,
        bmi: 22,
        bldSug: 95,
        hemog : 11,
        consngity : 0,
        rubella : 1,
        folic : 1,
        subfer : 0,
        cardic : 0,
        tyroid : 0
      }

    }

    handleSubmit = (event) =>{
      event.preventDefault()
      const dataSet = this.state
      console.log("final age is",dataSet )
      console.log(dataSet)

      axios
      .post('https://saue4gu7v4.execute-api.ap-southeast-1.amazonaws.com/dev/clrformdt/post',dataSet)
      .then(res => console.log(res.data));
    }

    handleInputChange = (event) =>{
      event.preventDefault()
      this.setState({
        age : event.target.value
      })
    }

    handleInputChange2 = (event) =>{
      event.preventDefault()
      this.setState({
        gravidity : event.target.value
      })
    }

    handleInputChange3 = (event) =>{
      event.preventDefault()
      this.setState({
        bldPre : event.target.value
      })
    }

    handleInputChange4 = (event) =>{
      event.preventDefault()
      this.setState({
        height: event.target.value
      })
    }

    handleInputChange5 = (event) =>{
      event.preventDefault()
      this.setState({
        bmi: event.target.value
      })
    }


    handleInputChange6 = (event) =>{
      event.preventDefault()
      this.setState({
        bldSug: event.target.value
      })
    }

    handleInputChange7 = (event) =>{
      event.preventDefault()
      this.setState({
        hemog : event.target.value
      })
    }

    // Radio buttons

    handleInputChange8 = (event) =>{
      event.preventDefault()
      this.setState({
        consngity: event.target.value
      })
    }

    handleInputChange9 = (event) =>{
      event.preventDefault()
      this.setState({
        rubella: event.target.value
      })
    }

    handleInputChange10 = (event) =>{
      event.preventDefault()
      this.setState({
        folic: event.target.value
      })
    }

    handleInputChange11 = (event) =>{
      event.preventDefault()
      this.setState({
        subfer: event.target.value
      })
    }

    handleInputChange12 = (event) =>{
      event.preventDefault()
      this.setState({
        cardic: event.target.value
      })
    }

    handleInputChange13 = (event) =>{
      event.preventDefault()
      this.setState({
        tyroid: event.target.value
      })
    }

    render(){

      const {age} = this.state
      const {gravidity} = this.state
      const {bldPre} = this.state
      const {height} = this.state
      const {bmi} = this.state
      const {bldSug} = this.state
      const {hemog} = this.state
      const {consngity} = this.state
      const {rubella} = this.state
      const {folic} = this.state
      const {subfer} = this.state
      const {cardic} = this.state
      const {tyroid} = this.state

      return(

        <div className="container-prediction">
         <div className="container-predict-input">

            <form onSubmit={this.handleSubmit}>
                  <div className="container-predict-header">
                        <h2> Prediction Form </h2>
                        {console.log(age)}
                        {console.log(gravidity)}
                        {console.log(bldPre)}
                        {console.log(height)}
                        {console.log(bmi)}
                        {console.log(bldSug)}
                        {console.log(hemog)}
                        {console.log(consngity)}
                        {console.log(rubella)}
                        {console.log(folic)}
                        {console.log(subfer)}
                        {console.log(cardic)}
                        {console.log(tyroid)}
                  </div>

                  <div className="container-predict-form">
                    <h3>Please fill the following information.</h3>
                  <div className="container-predict-div-left">
                    <h3>1. Age <input type="number" id="age" name="age"
                    onChange={this.handleInputChange} /></h3>
                    <h3>2. Gravidity <input type="number" id="gravidity" name="gravidity"
                    onChange={this.handleInputChange2}/></h3>
                    <h3>3. Blood Pressure <input type="number" id="bldPre" name="bldPre"
                    onChange={this.handleInputChange3}/></h3>
                    <h3>4. Height (Enter height in cm)<input type="number"
                    id="height" name="height"onChange={this.handleInputChange4}/></h3>
                    <h3>5. BMI<input type="number" id="bmi" name="bmi"
                    onChange={this.handleInputChange5}/></h3>
                    <h3>6. Blood Sugar <input type="number" id="bldSug" name="bldSug"
                    onChange={this.handleInputChange6}/></h3>
                    <h3>7. Haemoglobin <input type="number" id="hemog" name="hemog"
                    onChange={this.handleInputChange7}/></h3>
                  </div>


                  <div className="container-predict-div-right">
                    <h3>8. Consanguinity </h3>
                    &nbsp;&nbsp;<input type="radio" id="consngity_yes" name="consngity" value={1}
                    onChange={this.handleInputChange8}/>Yes
                    &nbsp;&nbsp;<input type="radio" id="consngity_no" name="consngity" value={0}
                    onChange={this.handleInputChange8} />No<br/>

                    <h3>9. Rubella Immunization </h3>
                    &nbsp;&nbsp;<input type="radio" id="rubella_yes" name="rubella" value={1}
                    onChange={this.handleInputChange9}/>Yes
                    &nbsp;&nbsp;<input type="radio" id="rubella_no" name="rubella" value={0}
                    onChange={this.handleInputChange9}/>No<br/>

                    <h3>10. Folic Acid </h3>
                    &nbsp;&nbsp;<input type="radio" id="folic_yes" name="folic" value={1}
                    onChange={this.handleInputChange10}/>Yes
                    &nbsp;&nbsp;<input type="radio" id="folic_no" name="folic" value={0}
                    onChange={this.handleInputChange10}/>No<br/>

                    <h3>11. Subfertility </h3>
                    &nbsp;&nbsp;<input type="radio" id="subfer_yes" name="subfer" value={1}
                    onChange={this.handleInputChange11}/>Yes
                    &nbsp;&nbsp;<input type="radio" id="subfer_no" name="subfer" value={0}
                    onChange={this.handleInputChange11}/>No<br/>

                    <h3>12. Cardiac Disease </h3>
                    &nbsp;&nbsp;<input type="radio" id="cardic_yes" name="cardic" value={1}
                    onChange={this.handleInputChange12}/>Yes
                    &nbsp;&nbsp; <input type="radio" id="cardic_no" name="cardic" value={0}
                    onChange={this.handleInputChange12}/>No<br/>

                    <h3>13. Thyroid Disease </h3>
                    &nbsp;&nbsp;<input type="radio" id="tyroid_yes" name="tyroid" value={1}
                    onChange={this.handleInputChange13}/>Yes
                    &nbsp;&nbsp; <input type="radio" id="tyroid_no" name="tyroid" value={0}
                    onChange={this.handleInputChange13}/>No<br/>

                      </div>
                  </div>
                  <div className="container-predict-submit">

                  <input type="submit" value="Submit" />
                  </div>
              </form>
          </div>

          <div className="container-predict-output"/>

        </div>


      )
    }

  }
 export default Prediction;

