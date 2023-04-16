import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home'
import Statistics from './Components/Statistics'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import { homeDataLoader} from './utilities/custom_functions'
import JobDetails from './Components/JobDetails'
import ErrorPage from './Components/ErrorPage'
import { getAppliedJobs } from './utilities/fakedb'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: getAppliedJobs,
    children:[
      { path: '/',
       element: <Home />,
      //  errorElement: <ErrorPage />,

       loader: homeDataLoader,
       },
       { path: 'job/:id',
       element: <JobDetails />, 
      //  errorElement: <ErrorPage />,
       loader: ({ params }) => fetch(`/Featured_Jobs.json`),
      },
      { path: 'statistics',
       element: <Statistics />,
      //  errorElement: <ErrorPage />,
       },
      { path: 'applied_jobs',
       element: <AppliedJobs />,
      //  errorElement: <ErrorPage />, 
      },
      { path: 'blog',
       element: <Blog />,
      //  errorElement: <ErrorPage />, 
      }, 
     
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
