import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {useState} from 'react';
import Register from './register';

export default function Login() {

const[userID, setUserID] = useState("");
const[pwd,setPwd] = useState("");
const [modalShow, setModalShow] = React.useState(false);

function registerform() {
    setModalShow(true);
    <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> 
}

const popover =  (
  <Popover id="popover-basic" sanitize="false" data-toggle="popover" data-trigger="focus">
    <Popover.Header as="h3">Enter credentials</Popover.Header>
    <Popover.Body>
      Username <br/>
      <input type="text" id="UID" name="UID" value={userID} onChange={ (e) => setUserID(e.target.value)} /> <br/>
      Password <br/>
      <input type="password" id="pwd" name="pwd" value={pwd} onChange={ (e) => setPwd(e.target.value)} />
      
      <hr/>
      <p>Don't have an account?</p>
      <Button variant="primary" onClick={registerform}>
        REGISTER
      </Button>

      

      </Popover.Body>
  </Popover>
);

const Example = () => (
  
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="success">Login</Button>
  </OverlayTrigger>


);

 return(
        <div>
        <Example/> &emsp;
        </div>
    );

}

