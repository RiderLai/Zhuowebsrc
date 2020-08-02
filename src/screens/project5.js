/*
 * @Author: Rider
 * @Date: 2020-06-10 23:16:34
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:12:10
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/project/project5/1.jpg';

class Project5 extends React.Component {

  render() {
    return (
			<div class="box">
        <Zmage
          className="img"
          src={img1}
        />
      </div>
		);
  }
}

export default Project5;