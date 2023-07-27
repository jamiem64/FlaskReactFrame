import React, {Component, useState, useEffect} from 'react';
// import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
// import '/App.css';
// import { 
//   CForm,
//   CFormInput,
// 	CFormLabel,
// 	CFormText,
// } from '@coreui/react';
import APIService from '../api/APIService';

function MassBalanceSolver() {
  // const [block, setBlock] = useState(0);
	const [title, setTitle] = useState("Start test")
	const [body, setBody] = useState("Start test")

	const [reac1, setReac1] = useState("Fe2O3")
	const [reac2, setReac2] = useState("CO")
	const [prod1, setProd1] = useState("Fe")
	const [prod2, setProd2] = useState("CO2")

	const [resp, setResp] = useState("");
	const [outputText, setOutputText] = useState("");

	// const [testSubmitted, setTestSubmitted] = useState(false);

	  useEffect(() => { 
			console.log(resp)
			setOutputText(resp.output)
		}, [resp]);



		async function sendData(reac1, reac2, prod1, prod2) {
			await fetch('http://localhost:5000/MassBalanceSolver', {
										method: 'POST',
										//credentials: 'include',
										headers: {'Content-Type': 'application/json'},
										body: JSON.stringify({
											reac1: reac1, 
											reac2: reac2,
											prod1: prod1,
											prod2: prod2,
										}),
									})
									.then(res => res.json())
									.then((data) => {
										setResp(data.output)
									})
									.catch(console.log)
									// .then(console.log('incoming data' + data))
									// .then(response => response.json())
									// .then(text => {console.log('The response was....', text);})
									// .then(text => setResp(text))
									// .then((data) => {
									// 	this.setState({ contacts: data })
									// })
	}


	const handleSubmit=(event)=>{ 
		event.preventDefault()
		sendData(reac1, reac2, prod1, prod2)
		setTitle('')
		setBody('')
	}

  return (
    <div>
      <p>Mass Balance Solver</p>
      <div>
			<form onSubmit = {handleSubmit} >

				<label htmlFor="title" className="form-label">Reactant 1</label>
				<input 
				type="text"
				className="form-control" 
				placeholder ="Enter title"
				value={reac1}
				onChange={(e)=>setReac1(e.target.value)}
				required
				/>

				<label htmlFor="title" className="form-label">Reactant 2</label>
				<input 
				type="text"
				className="form-control" 
				placeholder ="Enter title"
				value={reac2}
				onChange={(e)=>setReac2(e.target.value)}
				required
				/>

				<label htmlFor="title" className="form-label">Product 1</label>
				<input 
				type="text"
				className="form-control" 
				placeholder ="Enter title"
				value={prod1}
				onChange={(e)=>setProd1(e.target.value)}
				required
				/>

				<label htmlFor="title" className="form-label">Product 2</label>
				<input 
				type="text"
				className="form-control" 
				placeholder ="Enter title"
				value={prod2}
				onChange={(e)=>setProd2(e.target.value)}
				required
				/>

				{/* <label htmlFor="body" className="form-label">Body</label>
				<textarea 
				className="form-control" 
				placeholder ="Enter body" 
				rows='6'
				value={body}
				onChange={(e)=>setBody(e.target.value)}
				required
				>
				</textarea> */}

				<button 
				className="btn btn-primary mt-2"
				>
				Publish article</button>

</form>
      </div>
			<div>
				<span>Output: {resp}</span>
			</div>
    </div>
  );
}


export default MassBalanceSolver;