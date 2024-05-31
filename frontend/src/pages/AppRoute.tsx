import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './Courses'
import DrawerAppBar from '../components/DrawerAppBar'
import Students from './Students'
import Teacher from './Teachers'

export default function AppRoute() {
  return (
    <div className='AppRoute'>
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path='/' element={<Courses />}/>
          <Route path='/teachers' element={<Teacher />}/>
          <Route path='/students' element={<Students />}/>
        </Routes>
      </Router>
    </div>
  )
}


