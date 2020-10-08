/*
 * @Author: Rider
 * @Date: 2020-10-08 21:00:45
 * @LastEditors: Rider
 * @LastEditTime: 2020-10-08 21:02:44
 * @Description: file content
 */
import React from "react";

import Zmage from 'react-zmage';

import img1 from '../img/fashion/fashion7/1.jpg';
import img2 from '../img/fashion/fashion7/2.jpg';

class Fashion7 extends React.Component {

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
      </div>
		);
  }
}

export default Fashion7;