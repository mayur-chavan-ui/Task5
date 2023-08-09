import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './layout/Layout'
import Dashboard from '../pages/Dashboard'
import Login from "../components/Login";
import Form from "../components/Form";
import HodDashboard from "../pages/HodDashboard";
import StaffDashboard from "../pages/StaffDashboard";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Form />} />

            <Route path="dashboard/Hod" element={<ProtectedRoute allowedRoles={"Hod"}>
                <HodDashboard />
            </ProtectedRoute>} />

            <Route path="dashboard/Staff" element={<ProtectedRoute allowedRoles={"Staff"}>
                <StaffDashboard />
            </ProtectedRoute>} />
        </Route>
    )
)