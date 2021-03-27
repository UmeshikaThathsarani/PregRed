import React from 'react';
import './AppFooter.css';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined
} from '@ant-design/icons';




function AppFooter() {
    return(
      <div className="footer-container">
        <div className="f-text">
          <ul className="dot">
            <li>About Us: <a href="www.pregred.com"> www.pregred.com </a> </li>
            <li>Contact Us: 0768660203</li>
          </ul>
          <div className="social">
            <p >Social  follows</p>
            <p><TwitterOutlined/>  <YoutubeOutlined/>  <InstagramOutlined/>  <FacebookOutlined/></p>
          </div>
          <div className="f-right">
            <p > Help & Support</p>
          </div>
        </div>
        <p className='b-text'>&copy;PregRed</p>
      </div>

    );
}

export default AppFooter;
