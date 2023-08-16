import '../../App.css'
import React, {Component, useState, useEffect} from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';

function StatsModal(props) {
	const [visible, setVisible] = useState(false);
	const [foodChange, setFoodChange] = useState(0);
	const [waterChange, setWaterChange] = useState(0)
	const [foodSign, setFoodSign] = useState('')
	const [waterSign, setWaterSign] = useState('')
	
	useEffect(() => { 
    setFoodChange(props.foodProd - props.villagePop/10)
		setWaterChange(props.waterProd - props.villagePop/10)
  }, [
		visible,
	]);

	useEffect(() => { 
		if (foodChange > 0) {
			setFoodSign('+')
		} else if (foodChange < 0) {
			setFoodSign('-')
		} else {
			setFoodSign('')
		}
		if (waterChange > 0) {
			setWaterSign('+')
		} else if (waterChange < 0) {
			setWaterSign('-')
		} else {
			setWaterSign('')
		}
  }, [
		foodChange,
		waterChange,
	]);


  return (
    <>
    <CButton style={{ 'margin': '1rem 1rem' }} onClick={() => setVisible(!visible)}>Stats</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Village Stats</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CCard style={{ width: '18rem' }}>
        <CCardHeader>Weekly Change</CCardHeader>
        <CListGroup flush>
            <CListGroupItem>
                Food: {foodSign}{foodChange}
            </CListGroupItem>
            <CListGroupItem>
                Water: {waterSign}{waterChange}
            </CListGroupItem>
        </CListGroup>
			</CCard>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  </>
  );
}

export default StatsModal;