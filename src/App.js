/*
 * @Author: Rider
 * @Date: 2020-06-02 14:56:25
 * @LastEditors: Rider
 * @LastEditTime: 2020-10-08 22:15:29
 * @Description: file content
 */ 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import DehazeIcon from '@material-ui/icons/Dehaze';

import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Video from "./screens/video";

import Project1 from "./screens/project1";
import Project2 from "./screens/project2";
import Project3 from "./screens/project3";
import Project4 from "./screens/project4";
import Project5 from "./screens/project5";

import Fashion1 from "./screens/fashion1";
import Fashion2 from "./screens/fashion2";
import Fashion3 from "./screens/fashion3";
import Fashion4 from "./screens/fashion4";
import Fashion5 from "./screens/fashion5";
import Fashion6 from "./screens/fashion6";
import Fashion7 from "./screens/fashion7";

import Design1 from "./screens/design1";

import Commercial1 from "./screens/commercial1";
import Commercial2 from "./screens/commercial2";

import Lifestyle1 from "./screens/lifestyle1";
import Lifestyle2 from "./screens/lifestyle2";

function App() {
  
  // 单击变色
  const gray = "#808080";
  const black = "#000000";

  const [flag, setFlag] = React.useState(0);
  const [v1,setV1] = React.useState(gray);
  const [v2,setV2] = React.useState(black);
  const [v3,setV3] = React.useState(black);
  const [v4,setV4] = React.useState(black);
  const [v5,setV5] = React.useState(black);
  const [v6,setV6] = React.useState(black);
  const [v7,setV7] = React.useState(black);
  const [v8,setV8] = React.useState(black);
  const [v9,setV9] = React.useState(black);
  const [v10,setV10] = React.useState(black);
  const [v11,setV11] = React.useState(black);
  const [v12,setV12] = React.useState(black);
  const [v13,setV13] = React.useState(black);
  const [v14,setV14] = React.useState(black);
  const [v15,setV15] = React.useState(black);
  const [v16,setV16] = React.useState(black);
  const [v17,setV17] = React.useState(black);
  const [v18,setV18] = React.useState(black);
  const [v19,setV19] = React.useState(black);
  const [v20,setV20] = React.useState(black);

  let set_clicked_color = [
    setV1, setV2, setV3, setV4, setV5, setV6, setV7,
    setV8, setV9, setV10, setV11, setV12, setV13, setV14,
    setV15, setV16, setV17, setV18, setV19, setV20
  ];

  const v1Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[0](gray);
    setFlag(0);
  }

  const v2Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[1](gray);
    setFlag(1);
  }

  const v3Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[2](gray);
    setFlag(2);
  }

  const v4Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[3](gray);
    setFlag(3);
  }

  const v5Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[4](gray);
    setFlag(4);
  }

  const v6Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[5](gray);
    setFlag(5);
  }

  const v7Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[6](gray);
    setFlag(6);
  }

  const v8Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[7](gray);
    setFlag(7);
  }

  const v9Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[8](gray);
    setFlag(8);
  }

  const v10Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[9](gray);
    setFlag(9);
  }

  const v11Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[10](gray);
    setFlag(10);
  }

  const v12Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[11](gray);
    setFlag(11);
  }

  const v13Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[12](gray);
    setFlag(12);
  }

  const v14Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[13](gray);
    setFlag(13);
  }

  const v15Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[14](gray);
    setFlag(14);
  }

  const v16Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[15](gray);
    setFlag(15);
  }

  const v17Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[16](gray);
    setFlag(16);
  }
  
  const v18Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[17](gray);
    setFlag(17);
  }

  const v19Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[18](gray);
    setFlag(18);
  }

  const v20Onclick = evet => {
    set_clicked_color[flag](black);
    set_clicked_color[19](gray);
    setFlag(19);
  }

  // 二级导航栏
  const [navFlag, setNavFlag] = React.useState(-1);
  const [n1, setN1] = React.useState(false);
  const [n2, setN2] = React.useState(false);
  const [n3, setN3] = React.useState(false);
  const [n4, setN4] = React.useState(false);
  const [n5, setN5] = React.useState(false);
  let set_clicked_nav = [setN1, setN2, setN3, setN4, setN5];

  const n1Onclick = event => {
    if (navFlag === -1) {
      set_clicked_nav[0](true);
      setNavFlag(0);
      return ;
    }
    else if (navFlag === 0) {
      set_clicked_nav[0](false);
      setNavFlag(-1);
      return ;
    }
    else {
      set_clicked_nav[navFlag](false);
      set_clicked_nav[0](true);
      setNavFlag(0);
    }
  }

  const n2Onclick = event => {
    if (navFlag === -1) {
      set_clicked_nav[1](true);
      setNavFlag(1);
      return ;
    }
    else if (navFlag === 1) {
      set_clicked_nav[1](false);
      setNavFlag(-1);
      return ;
    }
    else {
      set_clicked_nav[navFlag](false);
      set_clicked_nav[1](true);
      setNavFlag(1);
    }
  }

  const n3Onclick = event => {
    if (navFlag === -1) {
      set_clicked_nav[2](true);
      setNavFlag(2);
      return ;
    }
    else if (navFlag === 2) {
      set_clicked_nav[2](false);
      setNavFlag(-1);
      return ;
    }
    else {
      set_clicked_nav[navFlag](false);
      set_clicked_nav[2](true);
      setNavFlag(2);
    }
  }

  const n4Onclick = event => {
    if (navFlag === -1) {
      set_clicked_nav[3](true);
      setNavFlag(3);
      return ;
    }
    else if (navFlag === 3) {
      set_clicked_nav[3](false);
      setNavFlag(-1);
      return ;
    }
    else {
      set_clicked_nav[navFlag](false);
      set_clicked_nav[3](true);
      setNavFlag(3);
    }
  }

  const n5Onclick = event => {
    if (navFlag === -1) {
      set_clicked_nav[4](true);
      setNavFlag(4);
      return ;
    }
    else if (navFlag === 4) {
      set_clicked_nav[4](false);
      setNavFlag(-1);
      return ;
    }
    else {
      set_clicked_nav[navFlag](false);
      set_clicked_nav[4](true);
      setNavFlag(4);
    }
  }

  // 导航栏隐藏
  const [navVisiable, setNavVisiable] = React.useState("");
  const navVisiableOnclick = event => {
    if(navVisiable === "none") {
      setNavVisiable("");
    }
    else {
      setNavVisiable("none");
    }
  }

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xl={2} lg={3} md={4}>
            <div class="sider-button">
              <DehazeIcon onClick={navVisiableOnclick}/>
            </div>
            <div class="sider">
              <div class="sider-head">
                <font>Chengzhuo</font>
                <br/>
                <font class="sider-head-xu">Xu</font>
              </div>
              <div class="navz" style={{display:navVisiable}}>
                <ul class="nav-ul">
                  <li>
                    <Link to="/" onClick={v1Onclick}>
                      <font class="nav-font-bold" style={{color: v1}}>Home</font>
                    </Link>
                  </li>
                  
                </ul>

                <div class="nav-font-bold" onClick={n1Onclick}>Project</div>
                {n1 &&
                <div class="nav-project">
                  <ul class="nav-ul">
                    <li>
                      <Link to="/project1" onClick={v4Onclick}>
                        <font style={{color: v4}}>What A Part Of Me?</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project2" onClick={v5Onclick}>
                        <font style={{color: v5}}>The Acceleration Of Life</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project3" onClick={v6Onclick}>
                        <font style={{color: v6}}>Thinking Of Intimate Relationshihps</font>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/project4" onClick={v7Onclick}>
                        <font style={{color: v7}}>When he/she is alone</font>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/project5" onClick={v2Onclick}>
                        <font style={{color: v2}}>In my comfort zone</font>
                      </Link>
                    </li>
                  </ul>
                </div>
                }

                <div class="nav-font-bold" onClick={n2Onclick}>Fashion</div>
                {n2 &&
                <div class="nav-project">
                  <ul class="nav-ul">
                    {/* <li>
                      <Link to="/fashion6" onClick={v15Onclick}>
                        <font style={{color: v15}}>There is another time</font>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/fashion1" onClick={v8Onclick}>
                        <font style={{color: v8}}>Facade</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/fashion2" onClick={v9Onclick}>
                        <font style={{color: v9}}>“Photosynhesis”</font>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/fashion3" onClick={v10Onclick}>
                        <font style={{color: v10}}>Warm In Hidden</font>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to="/fashion4" onClick={v11Onclick}>
                        <font style={{color: v11}}>Escape</font>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/fashion5" onClick={v12Onclick}>
                        <font style={{color: v12}}>Untitled</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/fashion7" onClick={v16Onclick}>
                        <font style={{color: v16}}>Fashionweek</font>
                      </Link>
                    </li>
                  </ul>
                </div>
                }

                <div class="nav-font-bold" onClick={n4Onclick}>Commercial</div>
                {n4 &&
                <div class="nav-project">
                  <ul class="nav-ul">
                  <li>
                      <Link to="/commercial2" onClick={v17Onclick}>
                        <font style={{color: v17}}>Masstone:There is another time</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/commercial1" onClick={v14Onclick}>
                        <font style={{color: v14}}>Warm and Smart</font>
                      </Link>
                    </li>
                  </ul>
                </div>
                }

                <div class="nav-font-bold" onClick={n3Onclick}>Design</div>
                {n3 &&
                <div class="nav-project">
                  <ul class="nav-ul">
                    <li>
                      <Link to="/design1" onClick={v13Onclick}>
                        <font style={{color: v13}}>Smart Gentleman</font>
                      </Link>
                    </li>
                  </ul>
                </div>
                }

                <div class="nav-font-bold" onClick={n5Onclick}>Lifestyle</div>
                {n5 &&
                <div class="nav-project">
                  <ul class="nav-ul">
                    <li>
                      <Link to="/lifestyle1" onClick={v18Onclick}>
                        <font style={{color: v18}}>Travel</font>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lifestyle2" onClick={v19Onclick}>
                        <font style={{color: v19}}>Street</font>
                      </Link>
                    </li>
                  </ul>
                </div>
                }

                <div class="nav-font-bold">
                  <Link to="/video" onClick={v20Onclick}>
                    <font class="nav-font-bold" style={{color: v20}}>Video</font>
                  </Link>
                </div>

                <div class="nav-contact">
                  <div>
                    <Link to="/contact" onClick={v3Onclick}>
                      <font class="nav-font-bold" style={{color: v3}}>Contact</font>
                    </Link>
                  </div>
                  <div style={{fontSize:".8rem"}}>sookiezhuo0910@gmail.com</div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={10} lg={9} md={8}>
            <div class="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {/* <Route path="/portfolio">
                  <Portfolio />
                </Route> */}
                
                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/video">
                  <Video />
                </Route>

                <Route path="/project1">
                  <Project1 />
                </Route>
                <Route path="/project2">
                  <Project2 />
                </Route>
                <Route path="/project3">
                  <Project3 />
                </Route>
                <Route path="/project4">
                  <Project4 />
                </Route>
                <Route path="/project5">
                  <Project5 />
                </Route>

                <Route path="/fashion1">
                  <Fashion1 />
                </Route>
                <Route path="/fashion2">
                  <Fashion2 />
                </Route>
                {/* <Route path="/fashion3">
                  <Fashion3 />
                </Route> */}
                <Route path="/fashion4">
                  <Fashion4 />
                </Route>
                <Route path="/fashion5">
                  <Fashion5 />
                </Route>
                <Route path="/fashion6">
                  <Fashion6 />
                </Route>
                <Route path="/fashion7">
                  <Fashion7 />
                </Route>

                <Route path="/design1">
                  <Design1 />
                </Route>

                <Route path="/commercial1">
                  <Commercial1 />
                </Route>
                <Route path="/commercial2">
                  <Commercial2 />
                </Route>

                <Route path="/lifestyle1">
                  <Lifestyle1 />
                </Route>
                <Route path="/lifestyle2">
                  <Lifestyle2 />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
