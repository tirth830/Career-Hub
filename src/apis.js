const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

export const sendemailendpoint = {
  SEND_MAIL: BASE_URL + "/send/mail",
}
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
}

// JOB ENDPOINTS
export const jobEndpoints = {
  CREATE_JOB_API:BASE_URL + "/job/createjob" ,
  EDIT_JOB_API :BASE_URL + "/job/editjob/", 
  GET_ALL_JOBS_API:BASE_URL + "/job/getAlljobs" ,
  DELETE_JOB_API:BASE_URL + "/job/deletejob" , 
  GET_USER_JOB:BASE_URL + "/job/getuserjobs",
  GET_FULL_JOB_DETAILS_AUTHENTICATED:BASE_URL + "/job/getFulljobDetails",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
