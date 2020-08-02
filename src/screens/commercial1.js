/*
 * @Author: Rider
 * @Date: 2020-06-09 18:20:54
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:26:15
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/commercial/commercial1/1.jpg';
import img2 from '../img/commercial/commercial1/2.jpg';
import img3 from '../img/commercial/commercial1/3.jpg';
import img4 from '../img/commercial/commercial1/4.jpg';
import img5 from '../img/commercial/commercial1/5.jpg';
import img6 from '../img/commercial/commercial1/6.jpg';
import img7 from '../img/commercial/commercial1/7.jpg';
import img8 from '../img/commercial/commercial1/8.jpg';

class Commercial1 extends React.Component {

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

export default Commercial1;