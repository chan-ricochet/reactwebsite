import {Accordion,ProgressBar,Button,Toast,ToastContainer} from 'react-bootstrap';
import {useState} from 'react';
import Menubar from './menu';

export default function CovidStats() {

    const total_tn=3530000;
    const total_in=43900000;
    const death_tn=38032;
    const death_in=526000;
    const val1=(total_tn/total_in*100).toFixed(2);
    const val2=(death_tn/death_in*100).toFixed(2);
    const [toastShow, setToastShow] = useState(false);
    var areas=["Baiyapanahalli Government Camp","Military Commando Hospital, Bellandur","Indiranagar Multispeciality Hospital"];
    var rand=areas[Math.floor(Math.random() * areas.length)];

  return (
      <div>
        <Menubar/>
    
        <div class="container1 align">
    
            <Accordion defaultActiveKey={['0']} alwaysOpen variant="warning" >
                
                <Accordion.Item eventKey="0" >
        
                <Accordion.Header class="accordion-button:not(.collapsed)">Total Cases</Accordion.Header>
        
                <Accordion.Body>
                    <div class="d-flex justify-content-around">
                        <div class="p-2">
                        <span class="stats-heading">Tamil Nadu<br/></span>
                        <span class="stats-number">{total_tn}</span><br/>
                        </div>
                        
                        <div class="p-2">
                        <span class="stats-heading">India<br/></span>
                        <span class="stats-number">{total_in}<br/></span>
                        </div>
                        <br/>
                    </div>
                    <ProgressBar now={val1} variant="warning" label={`${val1}%`}/>
                </Accordion.Body>
                
                </Accordion.Item>
    
                <Accordion.Item eventKey="1">
        
                <Accordion.Header>Deaths</Accordion.Header>
        
                <Accordion.Body>
                    <div class="d-flex justify-content-around">
                        <div class="p-2">
                        <span class="stats-heading">Tamil Nadu<br/></span>
                        <span class="stats-number">{death_tn}<br/></span>
                        </div>
          
                        <div class="p-2">
                        <span class="stats-heading">India<br/></span>
                        <span class="stats-number">{death_in}<br/></span>
                        </div>
                    <br/>
                    </div>
                    <ProgressBar now={val2} variant="danger" label={`${val2}%`}/>
         
                </Accordion.Body>
      
                </Accordion.Item>

            </Accordion>
        </div>

        <div class="container2 align">
                <h3>Vaccine Form </h3>

                <br/>
                <div class="mb-3">
                <label for="name" class="form-label" />Enter Name
                <input type="text" class="form-control" id="name1" />
                </div>

                <div class="mb-3 form-check" className="doses">
                <input type="radio" class="form-check-input" id="exampleCheck1" name="doses"/>
                <label class="form-check-label" for="exampleCheck1" /> Dose 1 &emsp;
                <input type="radio" class="form-check-input" id="exampleCheck2" name="doses"/>
                <label class="form-check-label" for="exampleCheck2" /> Dose 2 &emsp;
                <input type="radio" class="form-check-input" id="exampleCheck3" name="doses"/>
                <label class="form-check-label" for="exampleCheck3" /> Booster Dose &emsp;
                </div>

                <br/>
                <div class="mb-3 form-check d-flex justify-content-center" className="vaccine">
               
                <input type="radio" class="form-check-input" id="exampleCheck1" name="vaccine"/>
                <label class="form-check-label" for="vaccine1" /> CoviShield &emsp;
                <input type="radio" class="form-check-input" id="exampleCheck2" name="vaccine"/>
                <label class="form-check-label" for="vaccine2" /> Covaxxin &emsp;

                <label for="vaccines" class="form-label" />Other
                <select class="form-control" id="tests" class="custom-width">
                   <option default> Select any option</option>
                    <option>Pfizer/BioNTech</option>
                    <option>Moderna (Spikevax)</option>
                    <option>Johnson & Johnson/Janssen</option>
                 </select>
                </div>
                
                <div class="mb-3">
                <label for="city" class="form-label" />City
                <input type="text" class="form-control" id="city1" />
                </div>

                <div class="mb-3">
                <label for="area" class="form-label" />Area
                <input type="text" class="form-control" id="area1" />
                </div>

                <div class="mb-3 form-check" className="type">

                <input type="radio" class="form-check-input" id="exampleCheck1" name="type"/>
                <label class="form-check-label" for="exampleCheck1" /> Government Camps &emsp;
                <input type="radio" class="form-check-input" id="exampleCheck2" name="type"/>
                <label class="form-check-label" for="exampleCheck2" /> Private Centres &emsp;

                </div>

                <br/>
                <Button variant="primary" onClick={() => setToastShow(true)}> Check for Centres </Button>
                <br/>
        </div>

        <ToastContainer position='bottom-end' className="p-3">
            <Toast show={toastShow} onClose={() => setToastShow(false)} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Nearest Centre</strong>
            </Toast.Header>
           <Toast.Body>
                {rand}
           </Toast.Body>
            </Toast>
        </ToastContainer>
    
    </div>
  );
}