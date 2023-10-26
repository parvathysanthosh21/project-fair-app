import React, { useState } from 'react'
import { Card,Modal,Col,Row } from 'react-bootstrap'
import cardimg from '../Assests/plant store.png'
import { Link } from 'react-router-dom';
function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
 <Card style={{width:'28rem'}} className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img className='img-fluid' style={{height:'200px'}} src={cardimg} alt="project img" />
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat quibusdam nisi odit omnis animi, hic odio ullam dolor reprehenderit cum consequuntur vitae in repudiandae similique? Eaque velit accusantium veniam.</p>
                    <p>Language Used: <span className='fw-bolder'>HTML, CSS , React</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a href="https://github.com/parvathysanthosh21/pronia" target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-xl"></i></a>
                <a href="https://pronia.netlify.app/" target='_blank' className='me-3 btn'><i class="fa-solid fa-link fa-xl"></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard