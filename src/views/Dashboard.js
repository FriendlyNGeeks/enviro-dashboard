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


import React, { Component } from "react";
import { MDBCardImage } from 'mdb-react-ui-kit';
import header from '../assets/img/header.jpg'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Label,
} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader";

import CircularProgressWithLabel from './CircularProgress'


class Dashboard extends Component {

  intervalID;
  refreshID;

  constructor(props) {
    super(props);
    this.state = { temp: 0, hum: 0, press: 0, co: 0, nh3: 0 }
  }

  componentDidMount() {
    this.updateValues();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  updateValues() {
    fetch("http://localhost:8080/temperature")
      .then(response => { return response.text() })
      .then(data => {
        let temp = parseFloat(data)
        let tempF = temp * (9/5) + 32
        this.setState({ temp: tempF });
      })
      .catch(error => {
        console.log("[!] Error occured while fetching temperature >>> " + error);
      });
    fetch("http://localhost:8080/humidity")
      .then(response => { return response.text() })
      .then(data => {
        this.setState({ hum: parseFloat(data) });
      })
      .catch(error => {
        console.log("[!] Error occured while fetching humidity >>> " + error);
      });
    fetch("http://localhost:8080/pressure")
      .then(response => { return response.text() })
      .then(data => {
        this.setState({ press: parseFloat(data) });
      })
      .catch(error => {
        console.log("[!] Error occured while fetching pressure >>> " + error);
      });
    fetch("http://localhost:8080/reducing")
      .then(response => { return response.text() })
      .then(data => {
        this.setState({ co: parseFloat(data) });
      })
      .catch(error => {
        console.log("[!] Error occured while fetching pressure >>> " + error);
      });
    fetch("http://localhost:8080/ammonia")
      .then(response => { return response.text() })
      .then(data => {
        this.setState({ nh3: parseFloat(data) });
        this.intervalID = setTimeout(this.updateValues.bind(this), 60000);
      })
      .catch(error => {
        console.log("[!] Error occured while fetching pressure >>> " + error);
      });
  };

  render() {
    return (
      <>
        <PanelHeader
          size="md"
          content={
            <MDBCardImage position='top' src={header} alt='...' style={{ marginTop: -200 }} />
          }
        />
        <div className="content" style={{ marginTop: -100 }}>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart h-100">
                <CardHeader>
                  <h5 className="card-category">BME-280</h5>
                  <CardTitle tag="h4">Temperature</CardTitle>
                </CardHeader>
                <CardBody style={{ marginLeft: '25%' }}>
                  <div className="chart-area">
                    <CircularProgressWithLabel value={this.state.temp} symbol="°F" style={{ width: 200, height: 200 }} color="success" />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart h-100">
                <CardHeader>
                  <h5 className="card-category">BME-280</h5>
                  <CardTitle tag="h4">Humidity</CardTitle>
                </CardHeader>
                <CardBody style={{ marginLeft: '25%' }}>
                  <div className="chart-area">
                    <CircularProgressWithLabel value={this.state.hum} symbol="%" style={{ width: 200, height: 200 }} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart h-100">
                <CardHeader>
                  <h5 className="card-category">BME-280</h5>
                  <CardTitle tag="h4">Pressure</CardTitle>
                </CardHeader>
                <CardBody style={{ marginLeft: '25%', marginTop:'15%' }}>
                  <div className="chart-area">
                    <Label style={{ fontSize: 42 }}>{this.state.press} hPa</Label>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 25 }}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Additional Readings</CardTitle>
              </CardHeader>
              <CardBody style={{ marginLeft: '25%' }}>
                <div className="chart-area">
                  <Row>
                    <Col>
                      <CardHeader>
                        <CardTitle tag="h4">CO</CardTitle>
                      </CardHeader>
                      <CardBody >
                        <div className="chart-area">
                          <Label style={{ fontSize: 60 }}>{this.state.co} kO</Label>
                        </div>
                      </CardBody>
                    </Col>
                    <Col>
                      <CardHeader>
                        <CardTitle tag="h4">NH3</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <div className="chart-area">
                          <Label style={{ fontSize: 60 }}>{this.state.nh3} kO</Label>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
