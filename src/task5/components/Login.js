import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

function Login() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const getSignin = JSON.parse(localStorage.getItem("signin"))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const getHodData = localStorage.getItem("hodLoginData")
        const getStaffData = localStorage.getItem("staffLoginData")
        const { username, password } = data

        if (getHodData && getHodData.length || getStaffData && getStaffData.length) {
            const userData = JSON.parse(getHodData) || []
            const userStaffData = JSON.parse(getStaffData) || []

            const userLogin = userData.map((ele, i) => {
                if (ele.username === username && ele.password === password) {
                    localStorage.setItem("signin", JSON.stringify(ele))
                }
                if (getSignin?.role === "Hod") {
                    navigate("/dashboard/Hod")
                }
            })

            const userStaffLogin = userStaffData.map((ele, i) => {
                if (ele.username === username && ele.password === password) {
                    localStorage.setItem("signin", JSON.stringify(ele))
                }
                if (getSignin?.role === "Staff") {
                    navigate("/dashboard/Staff")
                }
            })
            if (userLogin.length == 0 && userStaffLogin.length == 0) {
                alert("Invalid Username or Password")
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((pre) => ({ ...pre, [name]: value }))
    }

    return (
        <>
             <form onSubmit={handleSubmit}>
                <Box
                    borderRadius={"25px"}
                    border={"0.25px solid #ccc"}
                    padding={"70px"}
                    display={"flex"}
                    flexDirection={"column"}
                    maxWidth={"400px"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px black"}
                >
                    <Typography  textAlign={"center"} variant='h4'> Login</Typography>
                    <TextField onChange={handleChange} name="username" value={data.username}  margin='normal' placeholder='Enter Username' type="text" />
                    <TextField onChange={handleChange} name="password" value={data.password} margin='normal' placeholder='Enter Password' type="password" />
                    <Button sx={{ mt: 2 }} type='submit' color='primary' variant='contained'>Login</Button>
                    <p className='mt-3'>Not Registered Yet? <NavLink to={"/register"}>Register</NavLink></p>
                </Box>
            </form>
        </>
    )
}

export default Login