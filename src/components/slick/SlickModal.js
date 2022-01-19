import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function SlickModal({ show = false, handleClose = () => null, children, title }) {
    return (
        <Modal centered show={show} onClick={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}