/*
 * @Author: Rider
 * @Date: 2020-06-09 18:20:02
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-12 16:51:38
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/project/project3/1.jpg';
import img2 from '../img/project/project3/2.jpg';
import img3 from '../img/project/project3/3.jpg';
import img4 from '../img/project/project3/4.jpg';
import img5 from '../img/project/project3/5.jpg';
import img6 from '../img/project/project3/6.jpg';
import img7 from '../img/project/project3/7.jpg';

class Project3 extends React.Component {

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
      </div>
		);
  }
}

export default Project3;