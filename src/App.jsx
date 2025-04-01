import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Head'
import Mission1_1 from './pages/Mission1_1'
import Page404 from './pages/Page404'
import Mission2_1 from './pages/Mission2_1'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mission1_1 />} />
        <Route path="/about" element={<Mission2_1 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
     
    </BrowserRouter>
  )
}
export default App