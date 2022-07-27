import img1 from "./onlinedoctor.cms";
import img2 from "./covid.webp";
import img3 from "./tests.jpg";
import {Carousel} from 'react-bootstrap';
import './App.css';

export default function Carousels() {
    return(
	<div>
        <Carousel>

        
        <Carousel.Item>
        <div class="rec-item-wrapper slideImage">
        <img
          className="d-block w-100"
          src={img1}
          alt="Online Consultation"
        />
        </div>
        <Carousel.Caption class="carousel-caption d-md-block bg-dark mb-4">
          <h3>Online Consultation</h3>
          <p>Pick from our highly acclaimed doctors for a smooth consulting experience</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item >
      <div class="rec-item-wrapper slideImage">
        <img
          className="d-block w-100"
          src={img2}
          alt="COVID"
        />
        </div>
        <Carousel.Caption class="carousel-caption d-none d-md-block bg-dark mb-4">
          <h3>COVID</h3>
          <p>Check out the lastest statistics and vaccination availability now</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div class="rec-item-wrapper slideImage">
        <img
          className="d-block w-100"
          src={img3}
          alt="Laboratory Tests"
        />
        </div>
        <Carousel.Caption class="carousel-caption d-none d-md-block bg-dark mb-4">
          <h3>Laboratory Tests</h3>
          <p>
            Book an appointment and have our volunteer collect your samples at your doorstep
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           </div> 
    );
}