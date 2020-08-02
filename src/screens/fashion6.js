/*
 * @Author: Rider
 * @Date: 2020-07-12 15:23:22
 * @LastEditors: Rider
 * @LastEditTime: 2020-07-12 15:24:25
 * @Description: file content
 */ 
import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/fashion/fashion6/1.jpg';
import img2 from '../img/fashion/fashion6/2.jpg';
import img3 from '../img/fashion/fashion6/3.jpg';
import img4 from '../img/fashion/fashion6/4.jpg';
import img5 from '../img/fashion/fashion6/5.jpg';
import img6 from '../img/fashion/fashion6/6.jpg';
import img7 from '../img/fashion/fashion6/7.jpg';
import img8 from '../img/fashion/fashion6/8.jpg';

class Fashion6 extends React.Component {

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
        <Zmage
          className="img"
          src={img7}
        />
        <Zmage
          className="img"
          src={img8}
        />
      </div>
		);
  }
}

export default Fashion6;