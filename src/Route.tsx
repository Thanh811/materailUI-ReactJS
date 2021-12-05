import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import CreateForm from './CreateForm';
import Home from './Home';

const RouteComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default RouteComponent
