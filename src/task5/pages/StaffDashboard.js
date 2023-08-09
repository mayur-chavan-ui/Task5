import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';


function StaffDashboard() {

  const [modal, setModal] = useState(false)
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("leaveData")) || [])
  const [leaveData, setLeaveData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
    status: "Pending"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLeaveData((pre) => ({ ...pre, id: uuidv4(), [name]: value }))
  }

  const d = new Date(leaveData.fromDate)
  const d2 = new Date(leaveData.toDate)
  const staffName = JSON.parse(localStorage.getItem("staffDetails"))

  if (d.getTime() && d2.getTime()) {
    const tdiff = d2.getTime() - d.getTime()
    const dDiff = tdiff / (1000 * 3600 * 24)
    leaveData.days = dDiff
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData((pre) => [...pre, leaveData])
    setLeaveData({
      fromDate: "",
      toDate: "",
      reason: "",
      status: "Pending"
    })
  }

  localStorage.setItem("leaveData", JSON.stringify(data) || [])

  const aprovelnth = data?.filter((user) => {
    return user.status === "Approved"
  })
  const rejectedlnth = data?.filter((user) => {
    return user.status === "Rejected"
  })

  return (
    <>
      <div className='col-sm-4' >
        <Modal size='md' isOpen={modal} style={{ marginTop: "100px" }}>
          <ModalHeader toggle={() => setModal(!modal)}>
            <h2 style={{ marginLeft: "100px" }}>APPLY FOR LEAVE</h2>
          </ModalHeader>
          <ModalBody style={{ margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
              <label>From <br />
                <input type="date" name='fromDate' value={leaveData.fromDate} onChange={handleChange} required />
              </label>
              <label style={{ margin: "10px 0 30px 50px" }}>To <br />
                <input type="date" name='toDate' value={leaveData.toDate} onChange={handleChange} required />
              </label>
              <br />
              <label>Reason<br />
                <textarea rows='4' cols="42" name='reason' value={leaveData.reason} onChange={handleChange} required />
              </label>
              <div className='d-flex flex-row-reverse mt-3' style={{ marginRight: "85px" }} >
                <div className='mx-2'><Button color="success" variant='contained' type='submit'>Submit</Button></div>
                <div><Button className='bg-danger text-white' onClick={() => setModal(false)}>Cancel</Button></div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
      <div style={{ margin: "120px 500px" }}>
        <Button type="button" color='primary' variant='contained' onClick={() => setModal(true)}>Apply For Leave</Button>
      </div>

      <div className='d-flex justify-content-center'>
        <div>
          <h1 className='text-center'>{data ? data.length : "0"}</h1>
          <p>Total Leaves</p>
        </div>
        <div className='px-5'>
          <h1 className='text-center'>{data ? aprovelnth.length : "0"}</h1>
          <p>Approved</p>
        </div>
        <div>
          <h1 className='text-center'>{data ? rejectedlnth.length : "0"}</h1>
          <p>Rejected</p>
        </div>
      </div>
      <br />
      <div className='d-flex container' >
        {data?.map((info) => {
          return <div className="card col-sm-3 m-2" >
            <div className="card-body" style={{ boxShadow: "2px 6px 8px purple" }}>
              <p><strong>Leave From </strong></p>
              <p> {info.fromDate} to {info.toDate}</p>
              <p><strong>Number Of Days</strong> :{info.days}</p>
              <p><strong>Reason:</strong><br /> {info.reason}</p>
              <p><strong>Status:</strong><br /> {info.status}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default StaffDashboard