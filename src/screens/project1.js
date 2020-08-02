/*
 * @Author: Rider
 * @Date: 2020-06-09 18:18:43
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:01:33
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/project/project1/1.jpg';
import img2 from '../img/project/project1/2.jpg';
import img3 from '../img/project/project1/3.jpg';
import img4 from '../img/project/project1/4.jpg';
import img5 from '../img/project/project1/5.jpg';
import img6 from '../img/project/project1/6.jpg';
import img7 from '../img/project/project1/7.jpg';
import img8 from '../img/project/project1/8.jpg';
import img9 from '../img/project/project1/9.jpg';
import img10 from '../img/project/project1/10.jpg';

class Project1 extends React.Component {

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
        <Zmage
          className="img"
          src={img10}
        />
      </div>
		);
  }
}

export default Project1;