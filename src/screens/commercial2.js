/*
 * @Author: Rider
 * @Date: 2020-10-08 21:13:08
 * @LastEditors: Rider
 * @LastEditTime: 2020-10-08 21:13:50
 * @Description: file content
 */
import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/commercial/commercial2/1.jpg';
import img2 from '../img/commercial/commercial2/2.jpg';
import img3 from '../img/commercial/commercial2/3.jpg';
import img4 from '../img/commercial/commercial2/4.jpg';
import img5 from '../img/commercial/commercial2/5.jpg';
import img6 from '../img/commercial/commercial2/6.jpg';
import img7 from '../img/commercial/commercial2/7.jpg';
import img8 from '../img/commercial/commercial2/8.jpg';

class Commercial2 extends React.Component {

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

export default Commercial2;