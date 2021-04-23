// import { null } from 'check-types';
import React, { Component } from 'react';
import './Prediction.css';
import axios from 'axios';

import { Radio } from 'antd';

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
      const dataSet = this.state;

      axios
      .post('https://dqwncwspu6.execute-api.ap-southeast-1.amazonaws.com/dev/userinputs',dataSet)
      .then(
        res => alert(res.data)
        );
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

      const {age , gravidity , bldPre , height , bmi , bldSug , hemog , consngity ,
        rubella , folic , subfer , cardic , tyroid
      } = this.state

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
                      <div className="input-divs" >
                        <h3>1. Age
                          <div>
                            <input  style={{marginLeft:"2%"}}
                            type="number" id="age" name="age" onChange={this.handleInputChange} />
                          </div>
                        </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>2. Gravidity
                          <div>
                            <input style={{marginLeft:"2%"}} type="number"
                            id="gravidity" name="gravidity" onChange={this.handleInputChange2} />
                          </div>
                        </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>3. Blood Pressure
                            <div>
                                <input style={{marginLeft:"2%"}} type="number"
                                id="bldPre" name="bldPre" onChange={this.handleInputChange3} />
                            </div>
                          </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>4. Height (cm)
                          <div>
                            <input style={{marginLeft:"2%"}} type="number"
                            id="height" name="height" onChange={this.handleInputChange4} />
                          </div>
                        </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>5. BMI
                          <div>
                            <input style={{marginLeft:"2%"}} type="number" id="bmi" name="bmi"
                            onChange={this.handleInputChange5} />
                          </div>
                        </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>6. Blood Sugar
                          <div>
                            <input style={{marginLeft:"2%"}} type="number"
                            id="bldSug" name="bldSug" onChange={this.handleInputChange6} />
                          </div>
                        </h3>
                      </div>

                      <div className="input-divs" >
                        <h3>7. Haemoglobin
                          <div>
                            <input style={{marginLeft:"2%"}} type="number"
                            id="hemog" name="hemog" onChange={this.handleInputChange7} />
                          </div>
                        </h3>
                      </div>

                    </div>


                    <div className="container-predict-div-right">

                      <h3>8. Consanguinity </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange8}>
                            <Radio id="consngity_yes" value={1} name="consngity">Yes</Radio>
                            <Radio id="consngity_no" value={0} name="consngity">No</Radio>
                        </Radio.Group>
                      </div>

                      <h3>9. Rubella Immunization </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange9}>
                            <Radio id="rubella_yes" value={1} name="rubella">Yes</Radio>
                            <Radio id="rubella_no" value={0} name="rubella">No</Radio>
                        </Radio.Group>
                      </div>

                      <h3>10. Folic Acid </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange10}>
                            <Radio id="folic_yes" value={1} name="folic">Yes</Radio>
                            <Radio id="folic_no" value={0} name="folic">No</Radio>
                        </Radio.Group>
                      </div>

                      <h3>11. Subfertility </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange11}>
                            <Radio id="subfer_yes" value={1} name="subfer">Yes</Radio>
                            <Radio id="subfer_no" value={0} name="subfer">No</Radio>
                        </Radio.Group>
                      </div>

                      <h3>12. Cardiac Disease </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange12}>
                            <Radio id="cardic_yes" value={1} name="cardic">Yes</Radio>
                            <Radio id="cardic_no" value={0} name="cardic">No</Radio>
                        </Radio.Group>
                      </div>

                      <h3>13. Thyroid Disease </h3>
                      <div className="radio-divs">
                        <Radio.Group onChange={this.handleInputChange13}>
                            <Radio id="tyroid_yes" value={1} name="tyroid">Yes</Radio>
                            <Radio id="tyroid_no" value={0} name="tyroid">No</Radio>
                        </Radio.Group>
                      </div>

                    </div>

                  </div>

                  <div className="container-predict-submit">
                    <div >
                      <input type="submit" value="Submit" />
                    </div>
                  </div>

              </form>
          </div>

          <div className="container-predict-output"/>

        </div>


      )
    }

  }
 export default Prediction;

