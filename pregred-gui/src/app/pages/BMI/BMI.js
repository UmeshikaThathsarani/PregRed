import React from 'react';

import './BMI.css';
import { Table } from 'antd';

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

function BMI() {
  return(
    <div className="container-bmi">

         <div className="container-bmi-div1">
            <p className="bmi-topic-para">BMI Calculator</p>
            <div className="cal-div">
              <h3>Enter Your Height  : <input type="number" id="height" name="height"/></h3>
              <h3>Enter Your Weight  : <input type="number" id="weight" name="weight"/></h3>
              {/* Add out put as needed */}
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

export default BMI;
