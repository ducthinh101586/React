import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import Register from './pages/Register'
// import StudentManagement from './pages/StudentManagement'
// import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './pages/Home'
// import Profile from './pages/Profile/Profile'
// import NotFound from './pages/NotFound'
import Counter from './components/counter/Counter'
import Profile from './components/profile/Profile'

// export const path = {
//   home: '/',
//   register: '/register',
//   student: '/student',
//   profile: '/profile',
//   profileInfo: '/profile/info/:profileid',
//   profilePurchase: '/profile/purchase'
// }

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />

        <Switch>
          <Redirect from="/students" to={path.student} />
          <Route path={path.home} exact>
            <Home />
          </Route>
          <Route path={path.register}>
            <Register />
          </Route>
          <Route path={path.student} component={() => <StudentManagement isLogged={true} />} />

          <Route path={path.profile}>
            <Profile />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter> */}
      <Counter />
      <Profile />
    </div>
  )
}

export default App
