import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router';
import Add from './Views/Add.jsx'
import './index.css'
import App from './App.jsx'
import Edit from './Views/Edit.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path ='/add' element={<Add/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
