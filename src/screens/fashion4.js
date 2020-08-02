/*
 * @Author: Rider
 * @Date: 2020-06-09 22:48:35
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 22:44:02
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/fashion/fashion4/1.jpg';
import img2 from '../img/fashion/fashion4/2.jpg';
import img3 from '../img/fashion/fashion4/3.jpg';
import img4 from '../img/fashion/fashion4/4.jpg';

class Fashion4 extends React.Component {

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
        <Zmage
          className="img"
          src={img3}
        />
        <Zmage
          className="img"
          src={img4}
        />
      </div>
		);
  }
}

export default Fashion4;