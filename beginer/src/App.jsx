import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/register" component={BrowserRouter} />
      </BrowserRouter>
      <Register />
    </div>
  )
}

export default App
