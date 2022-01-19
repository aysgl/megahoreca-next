import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import React, { useState } from "react";
import Image from "next/image";

export default function ModalComponent() {
    /*const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>*/

    return <Modal id="product-one" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal.Dialog className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <Modal.Body className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="p-3">
                        <div className="text-center">
                            <Card.Title className="card-title mb-1 text-left">Apple iPad (2018) 32GB</Card.Title>
                            <p className="text-success mb-0 text-left"><small><i style={{ fontSize: "9px" }}
                                className="icon-Varlk-41 pe-2" />laatste
                                10 stuks</small></p>
                            <Image className="img-fluid" alt="product" src="../images/product-1b.png" />
                        </div>
                    </div>
                </Modal.Body>
            </div>
        </Modal.Dialog>
    </Modal>
}