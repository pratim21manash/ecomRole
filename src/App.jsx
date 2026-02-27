import React from 'react'
import 'animate.css'
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin'>
          <Route path='login' element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App