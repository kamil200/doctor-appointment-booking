import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorDetails'

import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/doctors' element={<Doctors/>} />
        <Route exact path='/doctors/:id' element={<DoctorsDetails/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Signup/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/services' element={<Services/>} />
    </Routes>
  )
}

export default Routers
