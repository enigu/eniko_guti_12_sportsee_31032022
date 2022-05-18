import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as 
  Router,
  Route,
  Routes
} 
from "react-router-dom"
import reportWebVitals from './reportWebVitals'
//Pages
import Home from './pages/Home'
import User from './pages/User'
import Error from './pages/Error/index'
//Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserNumber from './components/UserNumber'
//CSS
import './index.css'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
  <Header />
  <Sidebar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/User" element={<UserNumber />} />
      <Route path="/User/:id" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
