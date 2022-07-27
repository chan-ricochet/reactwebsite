import {Button,Alert,Form,Dropdown} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register(props) {

	const[userID, setUserID] = useState("");
	const[name,setName] = useState("");
	const[age,setAge] = useState("");
	const[gender,setGender] = useState("");
	const[income,setIncome] = useState("");
	const[desig,setDesig] = useState("");
	const[pwd,setPwd] = useState("");

	function handleSubmit(event) {
	    var strData2;
		if(income==true) 
			strData2=`Your income is greater than 5 lakhs`;
		else strData2=``;
		var strData=`Hello ${name}!
		Your current userID is ${userID} and password is ${pwd}
		Age:${age}
		Gender:${gender}
		Designation:${desig}`;
		document.write(
			`<div class="alert alert-success" role="alert">
				${strData} <br/>
				${strData2}
			</div>`
		);	
	}

  return (
	  
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Form
        </Modal.Title>
      </Modal.Header>
      
	  <Modal.Body>
        <h6 class="center">
			<Form onSubmit={handleSubmit}>
				User ID : <input type="text" id="UID" name="UID" value={userID} onChange={ (e) => setUserID(e.target.value)} />
				<br/><br/>
				Name : <input type="text" id="name1" name="name1" value={name} onChange={ (e) => setName(e.target.value)} />
				<br/><br/>
				Age : <input type="number" id="age" name="age" value={age} onChange={ (e) => setAge(e.target.value)} />
				<br/><br/>
				<br/>
				<div class="d-flex justify-content-center">
				<div class="p-2"> Gender : </div>
				<div class="p-2" className="radio" onChange={(e) => setGender(e.target.value)}>
				 
					<input type="radio" id="Female" name="sex" value="Female" /> Female &ensp;
					<input type="radio" id="Male" name="sex" value="Male" /> Male &ensp;
					<input type="radio" id="NA" name="sex" value="NA" /> Prefer Not to Say &ensp;
				</div>
				</div>
				<div class="d-flex justify-content-center">
						<div class="p-2">Income > 5lakhs : </div>
						<div class="p-2"><input type="checkbox" id="income" name="income" value={income} onChange={ (e) => setIncome(!e.target.value)} /> </div>

				</div>
				<br/>
				Designation : 
				<select value={desig} onChange={(e) => setDesig(e.target.value)}>
					<option default>Select one option</option>
					<option value="fullstack">Full Stack Developer</option>
					<option value="frontend">Frontend</option>
					<option value="backend">Backend</option>
					<option value="devops">DevOps</option>
				 </select>
				<br/><br/>
				Password : <input type="password" id="pwd" name="pwd" value={pwd} onChange={ (e) => setPwd(e.target.value)} />
				<br/>
				<br/>
				<Button type="submit" variant="primary">Register</Button>
			</Form>
			</h6>
      </Modal.Body>
      
    </Modal>
  );
}



