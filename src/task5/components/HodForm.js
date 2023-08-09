import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function HodForm() {

    const navigate = useNavigate()
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("hodLoginData")) || [])
    
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role: "Hod"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
        alert("Registration Completed Succesfully")
        setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: ""
        })
    }

    localStorage.setItem("hodLoginData", JSON.stringify(data))

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((pre) => ({ ...pre, [name]: value }))
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>First Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='fname' type='text' value={formData.fname} />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='lname' type='text' value={formData.lname} />
                        </div>
                    </div>

                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>Email</label><br />
                            <input className='form-control' onChange={handleChange} required name='email' type='email' value={formData.email} />
                        </div>
                        <div className='form-group'>
                            <label>Contact</label><br />
                            <input className='form-control' onChange={handleChange} required name='phone' type='number' value={formData.phone} />
                        </div>
                    </div>

                    <div className='form-group'>
                        <div><label> Deparment </label></div>
                        <select className='form-control mt-1' required name='deparment' onClick={handleChange} >
                            <option selected>
                                Select the Deparment
                            </option>
                            <option value='Front-End Developer'>
                                Front-End Developer
                            </option>
                            <option value='Back-End Developer'>
                                Back-End Developer
                            </option>
                            <option value='FullStack Developer'>
                                FullStack Developer
                            </option>
                            <option value='Java Developer'>
                                Java Developer
                            </option>
                        </select>
                    </div>

                    <div className='d-flex justify-content-around mb-4 mt-4'>
                        <div className='form-group'>
                            <label>Username</label><br />
                            <input className='form-control' onChange={handleChange} required name="username" type='text' value={formData.username} />
                        </div>
                        <div className='form-group'>
                            <label>Password</label><br />
                            <input className='form-control' onChange={handleChange} required name='password' type='password' value={formData.password} />
                        </div>
                    </div>
                    
                    <div className='mt-4'>
                        <div style={{ width: "50%", marginLeft: "20%" }}>
                            <button className='btn btn-primary' type='submit' style={{ width: "100%" }}>Register</button>
                            <p className='mt-3'>Already Registered <NavLink to={"/login"}>Login</NavLink></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HodForm