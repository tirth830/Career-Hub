import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  job: null,
  editjob: false,
}

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload
    },
    setEditJob: (state, action) => {
      state.editjob = action.payload
    },
    resetJobState: (state) => {
      state.job = null
      state.editjob = false
    },
  },
})

export const {
  setJob,
  setEditJob,
  resetJobState,
} = jobSlice.actions

export default jobSlice.reducer
