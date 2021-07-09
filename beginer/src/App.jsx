import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

export const path = {
  home: '/',
  register: '/register',
  student: '/student'
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path={path.home} exact>
            <Home />
          </Route>
          <Route path={path.register}>
            <Register />
          </Route>
          <Route path={path.student} component={StudentManagement} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
