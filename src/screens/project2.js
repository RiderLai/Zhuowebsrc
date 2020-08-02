/*
 * @Author: Rider
 * @Date: 2020-06-09 18:19:56
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 22:38:17
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/project/project2/1.jpg';
import img2 from '../img/project/project2/2.jpg';
import img3 from '../img/project/project2/3.jpg';
import img4 from '../img/project/project2/4.jpg';
import img5 from '../img/project/project2/5.jpg';
import img6 from '../img/project/project2/6.jpg';
import img7 from '../img/project/project2/7.jpg';
import img8 from '../img/project/project2/8.jpg';
import img9 from '../img/project/project2/9.jpg';

class Project2 extends React.Component {

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
        <Zmage
          className="img"
          src={img9}
        />
      </div>
		);
  }
}

export default Project2;