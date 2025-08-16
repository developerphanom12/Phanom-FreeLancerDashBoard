import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/Profile/EditProfile'
import Portfolio from './Pages/Portfolio/Portfolio'


const App = () => {
  return (
     <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/favorites" element={<Favorites />} /> */}
        </Route>
        {/* Routes without layout */}
        
      </Routes>
    </Router>
  )
}

export default App
