import { createSlice } from '@reduxjs/toolkit'

const counterSlide = createSlice({
  name: 'counter', //prefix cho việc tạo action type,
  initialState: {
    count: 0
  },
  reducers: {
    increase: (state, action) => {
      state.count = state.count + 1
    },
    decrease: (state, action) => {
      state.count = state.count - 1
    }
  }
})

const counterReducer = counterSlide.reducer
export default counterReducer
export const increase = counterSlide.actions.increase
export const decrease = counterSlide.actions.decrease
