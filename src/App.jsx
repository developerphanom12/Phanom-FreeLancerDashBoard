import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Profile/Profile'
import Supports from './Pages/Support/Supports'
import PaymentSettings from './Pages/PaymentSettings/PaymentSettings'
import EditProfile from './Pages/Profile/EditProfile'
import Portfolio from './Pages/Portfolio/Portfolio'
import UploadYourWork from './Pages/Portfolio/UploadYourWork'
import Message from './Pages/Message/Message'
import Gigs from './Pages/MyGigs/MyGigs'
import CreateGigs from './components/GigsDashboard/CreateGigs'
import Earnings from './Pages/Earnings/Earnings'
import Orders from "./Pages/Orders/Orders"
import OrderDetails from './Pages/Orders/OrderDetails'
import SellYourWork from './Pages/Portfolio/SellYourWork'

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
          <Route path="/portfolio/upload-your-work" element={<UploadYourWork/>} />
          <Route path="/portfolio/upload-your-work/sell-your-work" element={<SellYourWork/>} />
          <Route path="/messages" element={<Message />} />
          <Route path="/support" element={<Supports />} />
          <Route path="/favorites" element={<PaymentSettings />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gigs/create-gigs" element={<CreateGigs/>} />
          <Route path="/earnings" element={<Earnings/>} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/orders/order-details' element={<OrderDetails/>}/>
        </Route>
        {/* Routes without layout */}
        
      </Routes>
    </Router>
  )
}

export default App
