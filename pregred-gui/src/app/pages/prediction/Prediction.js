import React, { Component } from 'react';
import './Prediction.css';
import axios from 'axios';

import { Radio } from 'antd';

class Prediction extends Component {

  constructor(props){
    super(props);
    this.state = {
      age : '',
      gravidity : '',
      bldPre : '',
      height: '',
      bmi: '',
      bldSug: '',
      hemog : '',
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
    // eslint-disable-next-line
    console.log(this.state)
    axios
    .post('https://dqwncwspu6.execute-api.ap-southeast-1.amazonaws.com/dev/userinputs',this.state)
    .then(
      // eslint-disable-next-line
      res => alert(res.data)
      );
  }

  handleInputChange = (event) =>{
    event.preventDefault()
    this.setState({
      age : Number(event.target.value)
    })
  }

  handleInputChange2 = (event) =>{
    event.preventDefault()
    this.setState({
      gravidity : Number(event.target.value)
    })
  }

  handleInputChange3 = (event) =>{
    event.preventDefault()
    this.setState({
      bldPre : Number(event.target.value)
    })
  }

  handleInputChange4 = (event) =>{
    event.preventDefault()
    this.setState({
      height: Number(event.target.value)
    })
  }

  handleInputChange5 = (event) =>{
    event.preventDefault()
    this.setState({
      bmi: Number(event.target.value)
    })
  }


  handleInputChange6 = (event) =>{
    event.preventDefault()
    this.setState({
      bldSug: Number(event.target.value)
    })
  }

  handleInputChange7 = (event) =>{
    event.preventDefault()
    this.setState({
      hemog : Number(event.target.value)
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
                </div>

                  <div className="container-predict-form">
                    <h3>Please fill the following information.</h3>

                  <div className="container-predict-div-left">
                    <div className="input-divs" >
                      <h3>1. Age
                        <div>
                          <input  style={{marginLeft:"2%"}} required
                          type="number" id="age" name="age" onChange={this.handleInputChange}
                          min='0'  value={age} />
                        </div>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>2. Gravidity
                        <div>
                          <input style={{marginLeft:"2%"}} type="number" required
                          id="gravidity" name="gravidity" onChange={this.handleInputChange2}
                          step="0.01" min='0' value={gravidity} />
                        </div>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>3. Blood Pressure
                          <div>
                              <input style={{marginLeft:"2%"}} type="number" required
                              id="bldPre" name="bldPre" onChange={this.handleInputChange3}
                              step="0.01" min='0' value={bldPre}/>
                          </div>
                        </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>4. Height (cm)
                        <div>
                          <input style={{marginLeft:"2%"}} type="number" required
                          id="height" name="height" onChange={this.handleInputChange4}
                          step="0.01" min='0' value={height} />
                        </div>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>5. BMI
                        <div>
                          <input style={{marginLeft:"2%"}} type="number" id="bmi" name="bmi"
                          onChange={this.handleInputChange5} required  step="0.01" min='0'
                          value={bmi}/>
                        </div>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>6. Blood Sugar
                        <div>
                          <input style={{marginLeft:"2%"}} type="number" required
                          id="bldSug" name="bldSug" onChange={this.handleInputChange6}
                          step="0.01" min='0' value={bldSug}/>
                        </div>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>7. Haemoglobin
                        <div>
                          <input style={{marginLeft:"2%"}} type="number" required
                          id="hemog" name="hemog" onChange={this.handleInputChange7}
                          step="0.01" min='0' value={hemog}/>
                        </div>
                      </h3>
                    </div>

                  </div>


                  <div className="container-predict-div-right">

                    <h3>8. Consanguinity </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange8} value={consngity}>
                          <Radio id="consngity_yes" value={1} name="consngity">
                            Yes
                          </Radio>
                          <Radio id="consngity_no" value={0} name="consngity">No</Radio>
                      </Radio.Group>
                    </div>

                    <h3>9. Rubella Immunization </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange9} value={rubella}>
                          <Radio id="rubella_yes" value={1} name="rubella">Yes</Radio>
                          <Radio id="rubella_no" value={0} name="rubella">No</Radio>
                      </Radio.Group>
                    </div>

                    <h3>10. Folic Acid </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange10} value={folic}>
                          <Radio id="folic_yes" value={1} name="folic">Yes</Radio>
                          <Radio id="folic_no" value={0} name="folic">No</Radio>
                      </Radio.Group>
                    </div>

                    <h3>11. Subfertility </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange11} value={subfer}>
                          <Radio id="subfer_yes" value={1} name="subfer">Yes</Radio>
                          <Radio id="subfer_no" value={0} name="subfer">No</Radio>
                      </Radio.Group>
                    </div>

                    <h3>12. Cardiac Disease </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange12} value={cardic}>
                          <Radio id="cardic_yes" value={1} name="cardic">Yes</Radio>
                          <Radio id="cardic_no" value={0} name="cardic">No</Radio>
                      </Radio.Group>
                    </div>

                    <h3>13. Thyroid Disease </h3>
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange13} value={tyroid}>
                          <Radio id="tyroid_yes" value={1} name="tyroid">Yes</Radio>
                          <Radio id="tyroid_no" value={0} name="tyroid">No</Radio>
                      </Radio.Group>
                    </div>

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
