import React, {Component, useState, useEffect} from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';

function TestModal(props) {
	const [visible, setVisible] = useState(false)

  return (
    <>
    <CButton onClick={() => setVisible(!visible)}>Test</CButton>
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Woohoo, you're reading this text in a modal!</p>
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

export default TestModal;