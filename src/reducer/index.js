import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import jobReducer from "../slices/jobSlice"
import profileReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  job: jobReducer,
})

export default rootReducer
