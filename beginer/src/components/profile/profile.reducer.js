import * as type from './profile.constants'
import produce from 'immer'

const initialState = {
  profile: {}
}
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case type.GET_USER_FULFIllED:
        draft.profile = action.payload
        break
      default:
        break
    }
  })

export default profileReducer
