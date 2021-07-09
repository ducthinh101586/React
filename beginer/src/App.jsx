import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/student" component={StudentManagement} />
      </BrowserRouter>
    </div>
  )
}

export default App
