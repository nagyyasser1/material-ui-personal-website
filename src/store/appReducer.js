import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
  mainColor: '#20c997',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode === 'light' ? (state.mode = 'dark') : (state.mode = 'light')
    },
    setMainColor: (state, action) => {
      state.mainColor = action.payload
    },
  },
})

export const { setMode, setMainColor } = appSlice.actions
export default appSlice.reducer
