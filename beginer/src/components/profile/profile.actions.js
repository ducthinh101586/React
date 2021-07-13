import * as type from './profile.constants'

export const getUserPending = () => ({
  type: type.GET_USER_PENDING
})

export const getUserFulfilled = payload => ({
  type: type.GET_USER_FULFIllED,
  payload
})

export const getUserRejected = payload => ({
  type: type.GET_USER_REJECTED,
  payload
})
