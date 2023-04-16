import { createContext, useState } from 'react'
import Header from './Components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
export const AppliedJobContext = createContext([])
function App() {
  
  const loaderData = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([...loaderData])

  return (
    <AppliedJobContext.Provider value={[appliedJobs, setAppliedJobs]}>
      <div className="App">
    <Header></Header>
    <Outlet></Outlet>
    </div>
    </AppliedJobContext.Provider>
    
  )
}

export default App
