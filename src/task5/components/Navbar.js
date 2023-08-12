import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("signin")
    navigate("/login")
  }

  return (
    <>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Button sx={{ color: "white" }} onClick={() => navigate("/")}>Home</Button>
          <div style={{ marginLeft: "auto" }}>
            <Button variant="contained" onClick={() => navigate("login")}>Login</Button>
            <Button variant="contained" style={{ marginLeft: "10px" }} onClick={handleLogout}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar