/*
 * @Author: Rider
 * @Date: 2020-06-09 18:21:06
 * @LastEditors: Rider
 * @LastEditTime: 2020-06-11 19:48:39
 * @Description: file content
 */ 

import React from "react";

class Contact extends React.Component {

  render() {
    return (
			<div class="contact">
        <div class="contact-head">About Chengzhuo</div>
        <div class="contact-content">Fashion Photographer {'&'} Designer</div>
        <div class="contact-content">based in London/Hangzhou/Taiyuan</div>
        <br />
        <div class="contact-content">email: sookiezhuo0910@gmail.com</div>
        <div class="contact-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sookiezhuo0910@qq.com</div>
        <br />
        <div class="contact-content">instagram: @chengzhuoxu</div>
        <div class="contact-content">weibo:@卓哥z-</div>
      </div>
		);
  }
}

export default Contact;