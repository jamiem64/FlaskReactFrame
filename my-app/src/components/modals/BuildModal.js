import '../../App.css'
import React, {Component, useState, useEffect} from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';

function BuildModal(props) {
	const [visible, setVisible] = useState(false)
	// const []

	function BuildFoodProd() {
		props.setFoodProd(props.foodProd + 1)
  }

  return (
    <>
    <CButton onClick={() => setVisible(!visible)}>Build</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Construct Production Buildings</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CCard style={{ width: '18rem' }}>
        <CCardHeader>Current Facilities</CCardHeader>
        <CListGroup flush>
            <CListGroupItem>
							Food: {props.foodProd} 
							<CButton 
								style={{ marginLeft: '8rem' }} 
								color="success"
								onClick={BuildFoodProd}
							>+1</CButton>
						</CListGroupItem>
            <CListGroupItem>
							Water: {props.waterProd} <CButton style={{ marginLeft: '8rem' }} color="success">+1</CButton>
						</CListGroupItem>
            <CListGroupItem>
							Wood: {props.woodProd} <CButton style={{ marginLeft: '8rem' }} color="success">+1</CButton>
						</CListGroupItem>
						<CListGroupItem>
							Stone: {props.stoneProd} <CButton style={{ marginLeft: '8rem' }} color="success">+1</CButton>
						</CListGroupItem>
        </CListGroup>
			</CCard>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
  </>
  );
}

export default BuildModal;