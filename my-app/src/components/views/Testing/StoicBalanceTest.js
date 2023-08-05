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
	const [block, setBlock] = useState([]);
	const [loading, setLoading] = useState(true);

	const [questionStr, setQuestionStr] = useState("Question String Start");
	const [answerStr, setAnswerStr] = useState("");
	const [answerJson, setAnswerJson] = useState({});

	const [reacArray, setReacArray] = useState([]);
	const [prodArray, setProdArray] = useState([]);

	const [outputHtml, setOutputHtml] = useState(
		<div>
			Loading...
		</div>
	)

	useEffect(() => { 
		fetch('http://127.0.0.1:5000/Tests/StoicBalanceTest')
			.then(res => res.json())
			.then(data => {
				setQuestionStr(data.output.question_str);
				setAnswerStr(data.output.answer_str);

				// setAnswerJson(data.output.answer_json);
				setReacArray(data.output.answer_json.reactants)
				setProdArray(data.output.answer_json.products)
				setLoading(false);
				
				console.log('reacArray', reacArray)
			});
	}, []);

	useEffect(() => { 
		if (!loading) {
			setOutputHtml(
				<div>
					<div className='ToolPageTitle'>Stoichiometry Balance Test</div>
						<div className='ToolPageTitleDivider'></div>
						<div className='ToolPageTitle'>{questionStr}</div>
						<div className='ToolPageTitleDivider'></div>
							<div>
							<form className='FormRow'>

								<div>
									<span>{Object.keys(reacArray[0])}</span>
									<input
									type="text"
									className="FormInput" 
									placeholder ="Enter title"
									// value={Object.keys(reacArray[0])}
									// onChange={(e)=>setReac1(e.target.value)}
									required
									/>
								</div>

								<div className='FormulaSyntaxTxt'> + </div>

								<div>
									<span>{Object.keys(reacArray[1])}</span>
									<input 
									type="text"
									className="FormInput" 
									placeholder ="Enter title"
									// value={Object.keys(reacArray[1])}
									// onChange={(e)=>setReac2(e.target.value)}
									required
									/>
								</div>

								<div className='FormulaSyntaxTxt'> {'>'} </div>

								<div>
									<span>{Object.keys(prodArray[0])}</span>
									<input 
									type="text"
									className="FormInput" 
									placeholder ="Enter title"
									// value={Object.keys(prodArray[0])}
									// onChange={(e)=>setProd1(e.target.value)}
									required
									/>
								</div>

								<div className='FormulaSyntaxTxt'> + </div>

								<div>
									<span>{Object.keys(prodArray[1])}</span>
									<input 
									type="text"
									className="FormInput" 
									placeholder ="Enter title"
									// value={Object.keys(prodArray[1])}
									// onChange={(e)=>setProd2(e.target.value)}
									required
									/>
								</div>

								<button
								className="FormSubmitButton"
								>
								Submit</button>

							</form>
						</div>
				</div>
			)
			console.log('reacArray ', reacArray)
		}
	}, [loading]);

	// useEffect(() => { 
	// 	console.log('reacArray ' + toString(reacArray))
	// }, [reacArray]);

	return (
		<div className='PageContentParent'>
			<div className='PageContentChild'>
				<div>{outputHtml}</div>
				

							<div>
								
						</div>
			</div>
		</div>
	)

}


export default StoicBalanceTest;