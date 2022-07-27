import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Button,ButtonGroup,Carousel,Badge,Alert,Toast,Container,Flex,
CloseButton,Figure,Nav,Navbar,Pagination,Spinner,Tabs,Tab,Overlay,OverlayTrigger,Tooltip} from 'react-bootstrap';
import img1 from "./online-doctor-consultation.jpeg";
import img2 from "./covid.png";
import img3 from "./tests.jpg";
import Carousels from './carousels';
import Login from './Login';
import Register from './register';
import Doctors from './doctors';
import Menubar from './menu';
import CovidStats from './covidpage';
import img4 from "./blur-hospital.webp";
import DarkTable from './labtest.js';
import logo1 from './doc-logo.jpg';
import Footer from './footer.js';




class App extends React.Component {
    render() {

        return(
            <div>
                <Menubar />
                <div class="home align2">
                    <h1 class="title">BETTER <img class="logo" src={logo1} /> HELP</h1>
                 </div>   
            
                 <div class="container1">
                    <br/><br/>
                    <Carousels />
                    <br/>
                 </div>
            </div>
        );
    }
}

/*     

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination size="lg">{items}</Pagination>
    <br />
  </div>
);

                <p>{paginationBasic}</p>
                               
                <OverlayTrigger key="right" placement="right" 
                overlay={
                    <Tooltip id="tooltip-right">
                        Tooltip on <strong>right</strong>.
                    </Tooltip>
                    }>
                     <Button variant="secondary">Tooltip on right</Button>
                </OverlayTrigger>
*/

export default App;
