import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/router";
import HodForm from "./components/HodForm"
import Login from "./components/Login"
import StaffForm from "./components/StaffForm"
import Navbar from './components/Navbar';
import Form from './components/Form'
import HodDashboard from './pages/HodDashboard';

function Main() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <HodForm/> */}
      {/* <Login /> */}
      {/* <StaffForm/> */}
      {/* <Navbar/> */}
      {/* <Form /> */}
      {/* <HodDashboard /> */}
    </>
  )
}

export default Main