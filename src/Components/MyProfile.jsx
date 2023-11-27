import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function MyProfile() {
    const [open, setOpen] = useState(false);
    const [userProfile,setUseProfile]= useState({
        username:"",email:"",password:"",profile:"",github:"",linkedin:""
    })
    const [existingImage,setExistingImage] = useState("")
    const [preview, setpreview] = useState("")
    useEffect(()=>{
        
    })
  return (
    <div className='border rounded shadow p-2 mb-5'>
        <div className='d-flex justify-content-between align-items-center m-3'>
            <h4>My Profile</h4>
            <button className='shadow btn p-3' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
        </div>
  <Collapse in={open}>
           <div>
                <div className='d-flex justify-content-center align-items-center '>
                    <label htmlFor="profile">
                        <input id='profile' style={{display:'none'}} type="file" />
                        <img style={{width:'250px', height:'250px',borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg" alt="uploadpicture" />
        
                    </label>
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='GitHub' />
                </div>
                <div className='mt-3 mb-5'>
                    <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
           </div>
  </Collapse>
    </div>
  )
}

export default MyProfile