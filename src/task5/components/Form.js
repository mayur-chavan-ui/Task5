import React, { useState } from 'react'
import HodForm from './HodForm'
import StaffForm from './StaffForm'

function Form() {

    const [form, setForm] = useState({
        staff: "",
        hod: "",
        contact: "",
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((pre) => ({ ...pre, [name]: value }))
    }

    return (
        <>
            <div className='col-4' style={{ margin: "70px auto 0" }}>
                <div className='shadow p-3 mb-5 bg-white rounded'>
                    <div style={{ marginBottom: "30px", justifyContent:"right"}} name="contact">
                        <label htmlFor="hod">HOD</label>
                        <input type="radio" name="contact" id="hod" value="hod" onClick={handleChange} />
                        <label style={{ marginLeft: "30px" }} htmlFor="staff">Staff</label>
                        <input type="radio" name="contact" id="staff" value="staff" onClick={handleChange} />
                        <br />
                    </div>
                    {form.contact === "hod" && <HodForm />
                        || form.contact === "staff" &&
                        <StaffForm />
                    }
                </div>
            </div >
        </>
    )
}

export default Form