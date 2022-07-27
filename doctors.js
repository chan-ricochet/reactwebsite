import './App.css';
import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ListGroup,Card,Placeholder,Toast,OverlayTrigger,ToastContainer,Pagination} from 'react-bootstrap';
import img1 from './doc1jpg.jpg';
import img2 from './Doctors-1.jpg';
import img3 from './doc3.png';
import Menubar from './menu';
import Footer from './footer.js';

export default function Doctors() {

const [toastShow, setToastShow] = React.useState(false);



return ( 
    <div>
    <Menubar />

    <div class="container1 align">
    <div class="row">
        
    <ListGroup id="doctors" horizontal>

        
      <ListGroup.Item>
        <Card style={{ width: '18rem' }}>
            <div class="card-img-top">
            <Card.Img variant="top" src={img1} />
            </div>
            
            <Card.Body>
                <Card.Title>Dr. Sheela Adwani</Card.Title>
                <div class="card-text">
                <Card.Text>
                    <span class="span-card-text">
                    Practising as a neurologist for the past 12 years
                    </span>
                </Card.Text>
                </div>
              
                    <Button variant="primary" onClick={() => setToastShow(true)}>Book an Appointment</Button>
                
            </Card.Body>
        </Card>
      </ListGroup.Item>
      

      
      <ListGroup.Item>
        <Card style={{ width: '18rem' }}>
            <div class="card-img-top">
            <Card.Img variant="top" src={img2} />
            </div>

            <Card.Body>
                <Card.Title>Dr. Andrea Bonanza</Card.Title>
                <div class="card-text">
                <Card.Text>
                    <span class="span-card-text">
                    Gynacelogist - graduated from the same hospital and has overseen over 25 successful pregnancies
                    </span>
                </Card.Text>
                </div>
                <Button variant="primary" onClick={() => setToastShow(true)}>Book an Appointment</Button>
            </Card.Body>
        </Card>
      </ListGroup.Item>
      

      
      <ListGroup.Item>
        <Card style={{ width: '18rem' }}>
            <div class="card-img-top">
            <Card.Img variant="top" src={img3} />
            </div>

            <Card.Body>
                <Card.Title>Dr. Drake Ramoray</Card.Title>
            <div class="card-text">
            <Card.Text>
                <span class="span-card-text">
                Highly skilled cardio surgeon. Has performed over 50 successful heart surgeries
                </span>
            </Card.Text>
            </div>

            <Button variant="primary" onClick={() => setToastShow(true)}>Book an Appointment</Button>
            </Card.Body>
        </Card>
      </ListGroup.Item>
      
    </ListGroup>
    </div>

    <ToastContainer position='top-end' className="p-3">
    <Toast show={toastShow} onClose={() => setToastShow(false)} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto">Confirmed</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>Your appointment has been scheduled</Toast.Body>
    </Toast>
    </ToastContainer>
   
   

    </div>
    </div>
  );
}

