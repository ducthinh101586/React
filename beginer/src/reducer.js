import counterReducer from './components/counter/counter.slice'
import profileReducer from './components/profile/profile.slice'

const rootReducer = {
  counter: counterReducer,
  profile: profileReducer
}

export default rootReducer
