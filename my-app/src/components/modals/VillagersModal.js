import '../../App.css'
import React, {Component, useState, useEffect} from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';

function VillagersModal(props) {
	const [visible, setVisible] = useState(false);

	
	useEffect(() => { 
    // setFoodChange(props.foodProd - props.villagePop/10)
	// 	setWaterChange(props.waterProd - props.villagePop/10)
  }, [
		visible,
	]);

  return (
    <>
    <CButton style={{ 'margin': '1rem 1rem' }} onClick={() => setVisible(!visible)}>Villagers</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Villager Info</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CCard style={{ width: '18rem' }}>
        <CCardHeader>Temp</CCardHeader>
        <CListGroup flush>
            <CListGroupItem>
                Temp
            </CListGroupItem>
            <CListGroupItem>
                Temp
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

export default VillagersModal;