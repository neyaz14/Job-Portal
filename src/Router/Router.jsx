import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import JobDetails from '../Pages/JobDetails';
import PrivateRoute from '../Privateroute/PrivateRoute';
import JobApply from '../Pages/JobApply';
import MyApplications from '../Pages/MyApplications';
import AddJob from '../Pages/AddJob';


    const Router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <h1>Error page</h1>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },{
              path:'/register',
              element: <Register></Register>
            },{
              path:'/login',
              element: <Login></Login>
            },
            {
              path:'/myApplications',
              element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },{
              path: '/addjob',
              element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
              path:'/jobs/:id',
              element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
              loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },{
              path:'/jobApply/:id',
              element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
              loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            }
          ]
        },
      ]);
    


export default Router;