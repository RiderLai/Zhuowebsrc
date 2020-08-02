/*
 * @Author: Rider
 * @Date: 2020-06-09 22:48:49
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 22:44:40
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/fashion/fashion5/1.jpg';
import img2 from '../img/fashion/fashion5/2.jpg';

class Fashion5 extends React.Component {

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

export default Fashion5;