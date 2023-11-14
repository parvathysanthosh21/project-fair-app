import React from 'react'
import AddProjects from './AddProjects'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-3 mb-5'>
        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className="ms-auto"><AddProjects/></div>
        </div>
        <div className="mt-4">
            {/* collection of user projects */}
            <div className="border d-flex flex align-items-center rounded p-2">
                <h6>Project Title</h6>
                <div className="icons ms-auto">
                    <button className="btn">
                    <i class="fa-solid fa-pen-to-square fa-2x"></i>
                    </button>
                    <button className="btn">
                    <i class="fa-brands fa-github fa-2x"></i>
                    </button>
                    <button className="btn">
                    <i class="fa-solid fa-trash fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProjects