/*
 * @Author: Rider
 * @Date: 2020-06-09 22:47:59
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:21:13
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/fashion/fashion2/1.jpg';
import img2 from '../img/fashion/fashion2/2.jpg';
import img3 from '../img/fashion/fashion2/3.jpg';
import img4 from '../img/fashion/fashion2/4.jpg';
import img5 from '../img/fashion/fashion2/5.jpg';
import img6 from '../img/fashion/fashion2/6.jpg';

class Fashion2 extends React.Component {

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
        <Zmage
          className="img"
          src={img5}
        />
        <Zmage
          className="img"
          src={img6}
        />
      </div>
		);
  }
}

export default Fashion2;