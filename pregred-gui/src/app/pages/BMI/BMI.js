import React, { PureComponent } from 'react';

import './BMI.css';
import { Table , Button} from 'antd';

class BMI extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      height : '',
      weight : '',
      bmiCount : ''
    }
  }

  handleSubmitBmi = (event) =>{
    event.preventDefault()
    const dataSet = this.state;

    if(parseFloat(dataSet.height) > 0 && parseFloat(dataSet.weight) > 0){
      const newHeight = dataSet.height/100;

      const newWeight = dataSet.weight;

      const bmiValue = newWeight/(newHeight*newHeight);

      this.setState({
        bmiCount : bmiValue
      })

    }else{
      // eslint-disable-next-line
      alert("Please enter the correct values !!")
    }

  }



  handleInputHeight = (event) =>{
    event.preventDefault()
    this.setState({
      height : event.target.value
    })

  }

  handleInputWeight = (event) =>{
    event.preventDefault()
    this.setState({
      weight : event.target.value
    })
  }


  render(){

    const columns = [
      {
        title: 'Prepregnancy BMI',
        dataIndex: 'bmi',
      },
      {
        title: 'Category',
        dataIndex: 'Category',
      },
      {
        title: 'Total Weight Gain Range',
        dataIndex: 'wetGain',
      },
      {
        title: 'Total Weight Gain Range for Pregnancy with Twins',
        dataIndex: 'twins',
      },
    ];

    const data = [
      {
        key: '1',
        bmi: '<18.5',
        Category: 'Underweight',
        wetGain : '28-40 lbs',
        twins: '_',
      },
      {
        key: '2',
        bmi: '18.5-24.9',
        Category: 'Normal Weight',
        wetGain: '25-35 lbs',
        twins: '37-54 lbs',
      },
      {
        key: '3',
        bmi: '25.0-29.9',
        Category: 'Overweight',
        wetGain: '15-25 lbs',
        twins: '31-50 lbs',
      },
      {
        key: '4',
        bmi: '>30.0',
        Category: 'Obese',
        wetGain: '11-20 lbs',
        twins: '25-42 lbs',
      },
    ];

    const{height , weight , bmiCount } = this.state

    return(
      <div className="container-bmi">

          <div className="container-bmi-div1">
              <p className="bmi-topic-para">BMI Calculator</p>

              <div className="cal-div">

                  <h3>Enter Your Height (cm) : <input type="number" id="height" value={height}
                  name="height" onChange={this.handleInputHeight} step="0.01" min="0" /></h3>

                  <h3>Enter Your Weight (Kg) : <input type="number" id="weight" value={weight}
                  name="weight" onChange={this.handleInputWeight}  step="0.01" min="0"/></h3>

                  <Button type="primary" onClick={this.handleSubmitBmi}>
                            Submit
                  </Button>

                  <div>
                    <h2>BMI count is : {bmiCount}</h2>
                  </div>
              </div>

        {/* Table */}

              <div className="cal-table-div">
                <h3>Recommendations for total weight gain during pregnancy by prepregnancy BMI</h3>
                <Table columns={columns} dataSource={data} size="small" />
              </div>

          </div>

          <div className="container-bmi-div2">
              <img className="bmi-bg-image" alt=""/>
          </div>

      </div>
    )

  }




}

export default BMI;
