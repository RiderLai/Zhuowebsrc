/*
 * @Author: Rider
 * @Date: 2020-06-09 18:20:12
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 22:41:51
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/project/project4/1.jpg';
import img2 from '../img/project/project4/2.jpg';
import img3 from '../img/project/project4/3.jpg';

class Project4 extends React.Component {

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
      </div>
		);
  }
}

export default Project4;