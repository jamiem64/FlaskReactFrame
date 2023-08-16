import '../../App.css'
import React, {Component, useState, useEffect} from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';

function BuildModal(props) {
	const [visible, setVisible] = useState(false)
	// const []

	function BuildFoodProd() {
    if (props.woodStored >= 5) {
      props.setFoodProd(props.foodProd + 1)
      props.setWoodStored(props.woodStored - 5)
    }
  }

  function BuildWaterProd() {
    if (props.stoneStored >= 5) {
      props.setWaterProd(props.waterProd + 1)
      props.setStoneStored(props.stoneStored - 5)
    }
  }

  function BuildWoodProd() {
    if (props.woodStored >= 5 && props.stoneStored >= 5) {
      props.setWoodProd(props.woodProd + 1)
      props.setWoodStored(props.woodStored - 5)
      props.setStoneStored(props.stoneStored - 5)
    }
  }

  function BuildStoneProd() {
    if (props.woodStored >= 5 && props.stoneStored >= 5) {
      props.setStoneProd(props.stoneProd + 1)
      props.setWoodStored(props.woodStored - 5)
      props.setStoneStored(props.stoneStored - 5)
    }
  }

  return (
    <>
    <CButton style={{ 'margin': '1rem 1rem' }} onClick={() => setVisible(!visible)}>Build</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Construct Production Buildings</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CCard style={{ width: '18rem' }}>
        <CCardHeader>Current Facilities</CCardHeader>
        <CListGroup flush>
            <CListGroupItem>
							Food: {props.foodProd} ($=5 Wood)
							<CButton 
								// style={{ marginLeft: '8rem' }} 
								color="success"
								onClick={BuildFoodProd}
							>+1</CButton>
						</CListGroupItem>
            <CListGroupItem>
							Water: {props.waterProd} ($=5 Stone)
							<CButton 
								// style={{ marginLeft: '8rem' }} 
								color="success"
								onClick={BuildWaterProd}
							>+1</CButton>
						</CListGroupItem>
            <CListGroupItem>
							Wood: {props.woodProd} ($=5 Wood, 5 Stone)
							<CButton 
								// style={{ marginLeft: '8rem' }} 
								color="success"
								onClick={BuildWoodProd}
							>+1</CButton>
						</CListGroupItem>
						<CListGroupItem>
							Stone: {props.stoneProd} ($=5 Wood, 5 Stone)
							<CButton 
								// style={{ marginLeft: '8rem' }} 
								color="success"
								onClick={BuildStoneProd}
							>+1</CButton>
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

export default BuildModal;