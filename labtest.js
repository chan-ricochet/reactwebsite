import React from 'react';
import {Toast,ToastContainer,Button} from 'react-bootstrap';
import Menubar from './menu';
import {useState} from 'react';

export default function LabTests() {

    const [toastShow, setToastShow] = useState(false);
    const[age,setAge] = useState("");
	const[gender,setGender] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [showPerson, setShowPerson] = useState(false);

    var tests = ["Heamoglobin Count","Blood Glucose Level","Blood Oxygen Level","Vitamin D" ,
                "Vitamin B+", "Thyroid", "Lipid Profile","Metabollic Panel"];
    var rand1 = tests[Math.floor(Math.random() * tests.length)];
    var rand2 = tests[Math.floor(Math.random() * tests.length)];

  
     

  return (
      <div>
      <Menubar/>

      <div class="container1 align d-flex justify-content-center">
        
        <div class="lab-test-container1 p-2">
            

                <div class="mb-3">
                <label for="name" class="form-label" />Name
                <input type="text" class="form-control" id="name1" />
                </div>
                
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" /> Email address
                <input type="email" class="form-control" id="email1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text"> We will never share your email with anyone else. </div>
                </div>

                <div class="mb-3">
                <label for="address" class="form-label" />Address
                <textarea class="form-control" id="address1" rows="3"/>
                </div>

                <div class="mb-3">
                <label for="tests" class="form-label" />Tests Required
                <select class="form-control" id="tests">
                   <option default> Select any option</option>
                    <option>Complete Blood Count (CBC)</option>
                    <option>Blood Lipid Profile</option>
                    <option>Blood Glucose Level</option>
                    <option>Coagulation Factor Tests</option>
                    <option>Blood Oxygen Level</option>
                 </select>
                </div>

                <div class="mb-3">
                <label for="date" class="form-label" />Date of Sample Collection
                <input type="date" class="form-control" id="date1" />
                </div>
  
                <label for="timimg" class="form-label" /> Time
                <div class="mb-3 form-check" className="timings">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" name="timings"/>
                <label class="form-check-label" for="exampleCheck1" /> 6:00-10:00 AM &emsp;
                <input type="checkbox" class="form-check-input" id="exampleCheck2" name="timings"/>
                <label class="form-check-label" for="exampleCheck2" /> 12:00-3:00 PM &emsp;
                <input type="checkbox" class="form-check-input" id="exampleCheck3" name="timings"/>
                <label class="form-check-label" for="exampleCheck3" /> 4:00-7:00 PM &emsp;
                </div>
        
                <br/>
                <Button variant="secondary" class="btn btn-secondary float-end" onClick={() => setShowPerson(true)}> + Add Person </Button>
                <br/>
               
           
                {showPerson ? 
                <div id="newP">
                    
                <br/>
                <div class="mb-3">
                <label for="name" class="form-label" />Name
                <input type="text" class="form-control" id="name1" />
                </div>

                <div class="mb-3">
                <label for="tests" class="form-label" />Tests Required
                <select class="form-control" id="tests">
                   <option default> Select any option</option>
                    <option>Complete Blood Count (CBC)</option>
                    <option>Blood Lipid Profile</option>
                    <option>Blood Glucose Level</option>
                    <option>Coagulation Factor Tests</option>
                    <option>Blood Oxygen Level</option>
                 </select>
                </div>

                </div> :
                null}

                 <br/>
                <Button class=" btn-primary btn-lg" onClick={() => setToastShow(true)}> Schedule </Button>

            
        </div>

        <ToastContainer position='bottom-end' className="p-3">
            <Toast show={toastShow} onClose={() => setToastShow(false)} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Details Received</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>Our volunteer will collect the samples at your doorstep</Toast.Body>
            </Toast>
        </ToastContainer>

        <div class="lab-test-container2 p-2">
        <br/>
            <h6>Recommended Tests</h6>
            <ul>
                <li> Heamoglobin Count</li>
                <li> Vitamin D</li>
                <li> Vitamin B+</li>
                <li> Thyroid </li>
                <li> Lipid Profile </li>
                <li> Metabollic Panel </li>
            </ul>
            
            <div class="align2">
                Enter Age : <input type="number" id="age" name="age" value={age} onChange={() => setShowResults(false), (e) => setAge(e.target.value)} />
				
				 Enter Gender : 
				<div className="radio" onChange={(e) => setGender(e.target.value), () => setShowResults(false)}>
				 
					<input type="radio" id="Female" name="sex" value="Female" /> Female &ensp;
					<input type="radio" id="Male" name="sex" value="Male" /> Male &ensp;
				</div>
				<br/>

                <Button variant="info" onClick={() => setShowResults(true)}> Recommend </Button>
            </div>

            {showResults ?
            <div id="myDiv" class="p-2">
                <br/>
                <h6>
                Ideal tests for you: <br/>
                </h6>
               
                {rand1} <br/>
                {rand2} <br/>
            </div> :
            null}
            

        </div>

      </div>

      </div>
  );
}