import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/baserul';

function EditProject({project}) {
    const [projectDetails, setProjectDetails] = useState({
        projectimage:"", title:project.title, languages:project.languages, github:project.github, website:project.website, overview:project.overview
    })
    const [preview, setpreview] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
    <button onClick={handleShow} className="btn"> <i class="fa-solid fa-pen-to-square fa-2x"></i> </button>

    <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Project Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className="col-lg-6 mt-4">
                                <label>
                                    <input type="file" style={{ display: 'none' }} />
                                    <img className='img-fluid' src={`${BASE_URL}/uploads/${project.projectimage}`} alt="" />
                                </label>

                            </div>
                            <div className="col-lg-6">
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Project Title' value={project.title} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Language Used' value={project.languages} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='GitHub Link' value={project.github}  />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Website Link' value={project.website} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Project Overview' value={project.overview} />
                                </div>

                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="warning">Update</Button>
                    </Modal.Footer>
                </Modal>
    </>
  )
}

export default EditProject