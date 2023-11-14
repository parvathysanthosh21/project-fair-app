import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap';

function AddProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button onClick={handleShow} className='btn btn-warning'>Add Project</button>
            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Project Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className="col-lg-6 mt-4">
                               <label>
                                <input type="file" style={{display:'none'}} />
                                 <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" alt="" />
                                 </label>
                              
                            </div>
                            <div className="col-lg-6">
                              <div className='mb-3'>  <input type="text" className='form-control' placeholder='Project Title' /></div>
                              <div className='mb-3'>  <input type="text" className='form-control' placeholder='Language Used' /></div>
                              <div className='mb-3'>  <input type="text" className='form-control' placeholder='GitHub Link' /></div>
                              <div className='mb-3'>  <input type="text" className='form-control' placeholder='Website Link' /></div>
                              <div className='mb-3'>  <input type="text" className='form-control' placeholder='Project Overview' /></div>

                            </div>
  
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="warning">Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AddProjects