import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JOB from "./pages/job_Post";
import Contact from "./pages/contact";
import About from "./pages/about";
import Jobform from "./pages/PostForm";
import Blog from "./pages/blog";
import JobApplicationForm from './components/JobApplicationForm/JobApplicationForm';
import OpenRoute from './components/core/OpenRoute';
import Error from './components/core/Error.jsx';
import VerifyEmail from './components/core/VerifyEmail.jsx'
import UpdatePassword from './components/core/UpdatePassword.jsx'
import ForgotPassword from './components/core/ForgotPassword.jsx'
import MyProfile from './components/core/MyProfile.jsx'
import Settings from './Settings'
import PrivateRoute from "./operations/Auth/PrivateRoute.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Myjobs from "./dashboard/MyJob.jsx"
import EditJob from "./EditJob/index.jsx"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/job' element={<JOB />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/postform' element={<Jobform />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/jobapplicationform/:id' element={<JobApplicationForm />} />
        <Route path="*" element={<Error />} />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              {/* <VerifyEmail/> */}
            </OpenRoute>
          }
        />
          <Route
          path="forgot-password"
          element={
            <OpenRoute>
              {/* <ForgotPassword /> */}
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              {/* <UpdatePassword /> */}
            </OpenRoute>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/my-jobs" element={<Myjobs />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route
                path="dashboard/edit-job/:jobid"
                // element={<EditJob />}
              />
        </Route>
      </Routes>
  );
}

export default App;
