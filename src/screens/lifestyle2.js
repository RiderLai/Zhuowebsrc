/*
 * @Author: Rider
 * @Date: 2020-10-08 21:27:19
 * @LastEditors: Rider
 * @LastEditTime: 2020-10-08 21:29:57
 * @Description: file content
 */
import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/lifestyle/lifestyle2/1.jpg';
import img2 from '../img/lifestyle/lifestyle2/2.JPG';
import img3 from '../img/lifestyle/lifestyle2/3.JPG';
import img4 from '../img/lifestyle/lifestyle2/4.JPG';
import img5 from '../img/lifestyle/lifestyle2/5.JPG';
import img6 from '../img/lifestyle/lifestyle2/6.jpeg';
import img7 from '../img/lifestyle/lifestyle2/7.JPG';

class Lifestyle2 extends React.Component {

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

export default Lifestyle2;