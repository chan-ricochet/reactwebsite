import React, { useState } from 'react';
import {Button,Offcanvas,Breadcrumb,Nav,Navbar} from 'react-bootstrap';
import {BsList} from 'react-icons/bs';
import logo1 from './doc-logo.jpg';
import Login from './Login';



export default function Menubar() {

  return(
	  <div>
		<Navbar  bg="dark" fixed="top" >

                <div class="d-flex justify-content-between">
                
                <div class="p-2">
                <img class="logo" src={logo1} />
                </div>

                <div class="p-2">
                <Nav variant="tabs">
                    <Nav.Item>
                       <Nav.Link eventKey={1} href="/App"><span class="text-white"> Home </span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={2} href="/doctors"> <span class="text-white">Online Consultation</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={3} href="/covidpage"> <span class="text-white"> COVID </span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={4} href="/labtest"> <span class="text-white"> Laboratory Tests </span> </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>

                <div class="p-2">
                <Login />
                </div>

                
                </div>
            </Navbar>
             
	  </div>
  );
}     
        