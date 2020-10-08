/*
 * @Author: Rider
 * @Date: 2020-10-08 21:24:48
 * @LastEditors: Rider
 * @LastEditTime: 2020-10-08 21:26:44
 * @Description: file content
 */
import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/lifestyle/lifestyle1/1.jpg';
import img2 from '../img/lifestyle/lifestyle1/2.jpg';
import img3 from '../img/lifestyle/lifestyle1/3.jpg';


class Lifestyle1 extends React.Component {

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

export default Lifestyle1;