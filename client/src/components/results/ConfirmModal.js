import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ConfirmModal.css';

const ConfirmModal = () => {
	// Set show modal
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title><i className="fas fa-exclamation-triangle"></i> WARNING</Modal.Title>
			</Modal.Header>
			<Modal.Body className='text-center lead'>Please be advised that some images may be graphic.</Modal.Body>
			<Modal.Footer>
				<Button className='red-btn' onClick={handleClose}>
					Confirm
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmModal;
