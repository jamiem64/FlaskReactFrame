import React, {Component, useState, useEffect} from 'react';
// import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
// import '../../App.css';
// import { 
//   CForm,
//   CFormInput,
// 	CFormLabel,
// 	CFormText,
// } from '@coreui/react';
// import APIService from '../api/APIService';

function StoicBalanceTest() {
  // const [block, setBlock] = useState(0);
	// const [title, setTitle] = useState("Start test")
	// const [body, setBody] = useState("Start test")

	// const [reac1, setReac1] = useState("Fe2O3")
	// const [reac2, setReac2] = useState("CO")
	// const [prod1, setProd1] = useState("Fe")
	// const [prod2, setProd2] = useState("CO2")

	const [resp, setResp] = useState("");
	const [outputText, setOutputText] = useState("");

	//   useEffect(() => { 
	// 		console.log(resp)
	// 		// setOutputText(resp.output)
	// 	}, [resp]);

    useEffect(() => { 
        fetch('http://127.0.0.1:5000/Tests/StoicBalanceTest')
    }, []);

	// 	async function sendData(reac1, reac2, prod1, prod2) {
			
	// 		await fetch('http://localhost:5000/Tools/StoicBalanceTest', {
	// 									method: 'POST',
	// 									//credentials: 'include',
	// 									headers: {'Content-Type': 'application/json'},
	// 									body: JSON.stringify({
	// 										reac1: reac1, 
	// 										reac2: reac2,
	// 										prod1: prod1,
	// 										prod2: prod2,
	// 									}),
	// 								})
	// 								.then(res => res.json())
	// 								.then((data) => {
	// 									setResp(data.output)
	// 								})
	// 								.catch(console.log)
	// }


	// const handleSubmit=(event)=>{ 
	// 	event.preventDefault()
	// 	sendData(reac1, reac2, prod1, prod2)
	// 	setTitle('')
	// 	setBody('')
	// }

  return (
		<div></div>
    
  );
}


export default StoicBalanceTest;