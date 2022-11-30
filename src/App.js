import React from 'react'
import Login from './components/Login'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Logout from './components/Logout'

// import { useSelector } from 'react-redux'
// import { selectUser , selecturl} from './features/userSlice'
// import  Logout from './components/Logout'

const App = () => {

  // const user = useSelector(selectUser,selecturl);

  return (
    <>
    <Routes>
      {/* <Route path='/logout' element={<Logout/>}/> */}
      <Route path='/' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default App