import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({ insideDashboard }) {
  return (
    <>
      <Navbar style={{ backgroundColor: '#90ee90' }} className="position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              <i className="fa-brands fa-stack-overflow fa-bounce"></i>  Project Fair
            </Link>
          </Navbar.Brand>
          {insideDashboard &&
            <button style={{ border: 'none', background: 'none', fontSize: '20px', color: 'white' }}>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
          }        </Container>
      </Navbar>
    </>
  )
}

export default Header