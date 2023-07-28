import React, {Component, useState, useEffect} from 'react';
// import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../App.css';
// import { 
//   CForm,
//   CFormInput,
// 	CFormLabel,
// 	CFormText,
// } from '@coreui/react';
import APIService from '../api/APIService';

function StoicSolver() {
  // const [block, setBlock] = useState(0);
	const [title, setTitle] = useState("Start test")
	const [body, setBody] = useState("Start test")

	const [reac1, setReac1] = useState("Fe2O3")
	const [reac2, setReac2] = useState("CO")
	const [prod1, setProd1] = useState("Fe")
	const [prod2, setProd2] = useState("CO2")

	const [resp, setResp] = useState("");
	const [outputText, setOutputText] = useState("");

	  useEffect(() => { 
			console.log(resp)
			// setOutputText(resp.output)
		}, [resp]);

		async function sendData(reac1, reac2, prod1, prod2) {
			
			await fetch('http://localhost:5000/Tools/StoicSolver', {
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
	}


	const handleSubmit=(event)=>{ 
		event.preventDefault()
		sendData(reac1, reac2, prod1, prod2)
		setTitle('')
		setBody('')
	}

  return (
		<div className='PageContentParent'>
			<div className='PageContentChild'>
				<div>
					<div className='ToolPageTitle'>Stoichiometry Solver</div>
						<div className='ToolPageTitleDivider'></div>
							<div>
							<form onSubmit = {handleSubmit} className='FormRow'>

								<input
								type="text"
								className="FormInput" 
								placeholder ="Enter title"
								value={reac1}
								onChange={(e)=>setReac1(e.target.value)}
								required
								/>

								<div className='FormulaSyntaxTxt'> + </div>

								<input 
								type="text"
								className="FormInput" 
								placeholder ="Enter title"
								value={reac2}
								onChange={(e)=>setReac2(e.target.value)}
								required
								/>

								<div className='FormulaSyntaxTxt'> {'>'} </div>

								<input 
								type="text"
								className="FormInput" 
								placeholder ="Enter title"
								value={prod1}
								onChange={(e)=>setProd1(e.target.value)}
								required
								/>

								<div className='FormulaSyntaxTxt'> + </div>

								<input 
								type="text"
								className="FormInput" 
								placeholder ="Enter title"
								value={prod2}
								onChange={(e)=>setProd2(e.target.value)}
								required
								/>

								<button
								className="FormSubmitButton"
								>
								Balance</button>

							</form>
								</div>

							<div>
								<div className='FormOutputArea'>
								{/* <span className='FormOutputText'>Output:</span> */}
							</div>
							<div>
								<span className='FormOutputEqn'>{resp}</span>
							</div>
						</div>
						
					</div>
			</div>
		</div>
		
    
  );
}


export default StoicSolver;