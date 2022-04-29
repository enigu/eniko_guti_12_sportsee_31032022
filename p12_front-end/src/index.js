import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as 
  Router,
  Route,
  Routes
} 
from "react-router-dom"
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Error from './pages/Error/index'
import reportWebVitals from './reportWebVitals'
import User from './pages/User'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
  <Header />
  <Sidebar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/User/:id" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
