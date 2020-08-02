/*
 * @Author: Rider
 * @Date: 2020-06-09 18:20:42
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 22:47:00
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/design/design1/1.jpg';
import img2 from '../img/design/design1/2.jpg';

class Design1 extends React.Component {

  render() {
    return (
			<div class="box">
        <Zmage
          className="img"
          src={img1}
        />
        <Zmage
          className="img"
          src={img2}
        />
      </div>
		);
  }
}

export default Design1;