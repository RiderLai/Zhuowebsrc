/*
 * @Author: Rider
 * @Date: 2020-06-09 18:17:38
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:03:59
 * @Description: file content
 */ 

import React from "react";

import Zmage from 'react-zmage'

import img1 from "../img/home/1.jpg"
import img2 from "../img/home/2.jpg"
import img3 from "../img/home/3.jpg"
import img4 from "../img/home/4.jpg"

class Home extends React.Component {

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

export default Home;