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

*/

import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import PanelHeader from "components/PanelHeader/PanelHeader";

import {
    Card,
    CardBody,
    CardTitle,
    Row
} from "reactstrap";

import header from '../assets/img/sunset.png'
import inventor from '../assets/img/inventor.png'
import grow from '../assets/img/grow.png'
import lufdaten from '../assets/img/lufdaten.png'

const More = () => {
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
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle tag="h1">Other Interesting Projects</CardTitle>
                        </CardBody>
                    </Card>
                </Row>
                <MDBRow className='row-cols-md-3 g-5' style={{marginTop:0}}>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={inventor}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Inventor 2040W</MDBCardTitle>
                                <MDBCardText>
                                    An all-in-one board for making battery powered contraptions that can move, (optionally) make noise, and talk to the internet
                                </MDBCardText>
                            </MDBCardBody>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <MDBBtn 
                                    color="dark"
                                    href="#inventor"
                                    onClick={() => { window.location.href = 'https://shop.pimoroni.com/products/inventor-2040-w?variant=40053063155795'; return null; }}
                                >
                                    Check It Out
                                </MDBBtn>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src={grow}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Getting Started With Grow</MDBCardTitle>
                                <MDBCardText>
                                    Automatic, systematic and hydromatic, Grow is a smart modular monitoring system designed to help you take the best possible care of your plants
                                </MDBCardText>
                            </MDBCardBody>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <MDBBtn 
                                    color="dark"
                                    href="#grow"
                                    onClick={() => { window.location.href = 'https://learn.pimoroni.com/article/assembling-grow'; return null; }}
                                >
                                    Check It Out
                                </MDBBtn>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={lufdaten}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Outdoor Air Quality Station</MDBCardTitle>
                                <MDBCardText>
                                    Build an air quality monitoring station that can be mounted outside your house
                                </MDBCardText>
                            </MDBCardBody>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <MDBBtn 
                                    color="dark"
                                    href="#lufdaten"
                                    onClick={() => { window.location.href = 'https://learn.pimoroni.com/article/enviro-plus-and-luftdaten-air-quality-station'; return null; }}
                                >
                                    Check It Out
                                </MDBBtn>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}

export default More;
