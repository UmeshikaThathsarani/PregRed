import React from 'react';
import { Card } from 'antd';

import './Healthcare.css';

const { Meta } = Card;

function BMI() {
  return(
    <div className="row">
      <div className="column">
        <a href="https://bit.ly/2P6sEDc" target="blank" style={{display: "table-cell"}}>
          <Card
              hoverable
              style={{ width: "100%" }}
              cover={
              <img alt="example" src="https://bit.ly/3aqmBkx" />}
              >
              <Meta title="Castle Street Hospital" description="www.instagram.com" />
            </Card>
          </a>
      </div>
      <div className="column">
        <a href="https://bit.ly/3v4Z5kO" target="blank" style={{display: "table-cell"}}>
          <Card
              hoverable
              style={{ width: "100%" }}
              cover={
              <img alt="example" src="https://bit.ly/3n3cWVQ" />}
              >
              <Meta title="Pregnancy clinic" description="www.instagram.com" />
            </Card>
          </a>
      </div>
      <div className="column">
        <a href="https://bit.ly/3tCaLez" target="blank" style={{display: "table-cell"}}>
          <Card
              hoverable
              style={{ width: "100%" }}
              cover={
              <img alt="example" src=" https://bit.ly/32u1b1c" />}
              >
              <Meta title="Kaludewala Pregnancy & Children's Clinic"
               description="www.instagram.com" />
            </Card>
          </a>
      </div>

    </div>
  )


}

export default BMI;
