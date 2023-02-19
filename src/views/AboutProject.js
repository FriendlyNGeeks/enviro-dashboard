/*!
=========================================================
        ** Enviro+ Web UI Dashboard **
=========================================================

MIT License

Copyright (c) 2022 dedSyn4ps3

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


***This project is built on a skeleton using components designed by Creative Tim***

Any use, re-use, and adaptations of this project and it's code shall include the above license as well
as credit for the components used that were adapted from Creative Tim's work...


=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader";

import pimoroni from "../assets/img/pimoroni.jpg"

function About() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user" style={{marginBottom: -50, marginTop: -50}}>
              <div className="image">
                <img alt="..." src={require("assets/img/header.jpg").default} style={{width:'100%'}} />
              </div>
              <CardBody>
                <div className="author">
                  <a to="#pimoroni" onClick={() => {window.location.href = 'https://shop.pimoroni.com'; return null;}}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={pimoroni}
                    />
                    <h3 className="title">About</h3>
                  </a>
                  <p className="description" style={{fontSize: 21}}>Project Info</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col>
            <Card>
              <CardHeader>
                <h3 className="title" style={{marginTop: 10}}>It's All About Options</h3>
              </CardHeader>
              <CardBody>
                <p>
                  The goal of this project is to offer another exciting way to utilize the excellent Enviro Plus HAT from Pimoroni, while giving
                  each maker, teacher, student, or enthusiast the opportunity to dig into the source code to better understand the inner workings
                  of the application.
                </p>
                <p>
                  For those unaware, the Pimoroni website has several good walkthrough tutorials for various devices. Their GitHub page also offers
                  a trove of code for both new and experienced coders to use to communicate and retrieve data from whichever device they are using.
                </p>
              </CardBody>
              <CardHeader>
                <h4 className="title">Making Things Interesting</h4>
              </CardHeader>
              <CardBody>
                <p>
                  The various walkthroughs and code examples provided by Pimoroni are an outstanding way for educators and makers alike to get started
                  quickly using boards such as the Enviro Plus HAT, but what about next steps? What are the steps needed to go beyond command line 
                  scripts, and on to more UI-based applications? That's usually up to the maker to figure out since each scenario is different. 
                </p>
                <p>
                  <u><b>What's better than having to figure out these steps? How about having a next-level application like this to learn from!</b></u>
                </p>
              </CardBody>
              <CardHeader>
                <h4 className="title">Building Blocks</h4>
              </CardHeader>
              <CardBody>
                <p>
                  There are multitudes of ways and numerous frameworks out there to assist in the development of web applications. The core framework used
                  in this project is React. Like other frameworks, it offers flexible components and structures to build both simple and complex web apps.
                  This project is merely one of thousands of React-based applications, and will hopefully serve as a launchpad for makers and others to 
                  discover new ways to expand their current projects, and maybe even inspire new ones...
                </p>
                <p>
                  <b>Where React serves as the front end user interface, Flask runs on the back end.</b> The primary reason for using Flask, if it isn't obvious,
                  is that it's a Python server microframework. This works out great since the Enviro Plus uses a large Python codebase for easy programmatic 
                  operations.
                </p>
                <p>
                  The React front end is built on top of an excellent template coded by <a href="https://www.creativetim.com">Creative Tim</a>, but only utilizes a fraction of the capablilities that the
                  original template included...mainly because it wasn't needed for this particular application. <u>Anyone looking for a great starting point for  a
                  React project should definitely check out their awesome templates!</u>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
