import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"; // Correct import


// Function to decode JWT and extract accountType
const getAccountTypeFromToken = (token) => {
  try {
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.accountType; // Assuming 'accountType' is a field in your JWT payload
    }
    return null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  accountType: localStorage.getItem("token") ? getAccountTypeFromToken(localStorage.getItem("token")) : null,
};


const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      state.accountType = getAccountTypeFromToken(action.payload); // Update accountType when token changes
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;

// const token = localStorage.getItem("token");

// const getAccountTypeFromToken = (token) => {
//   try {
//     if (token) {
//       const decoded = jwt_decode(token);
//       return decoded.ACCOUNT_TYPE; // Assuming 'accountType' is a field in your JWT payload
//     }
//     return null;
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return null;
//   }
// };

// const initialState = {
//   signupData: null,
//   loading: false,
//   token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
//   accountType: token ? getAccountTypeFromToken(token) : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     setSignupData(state, value) {
//       state.signupData = value.payload;
//     },
//     setLoading(state, value) {
//       state.loading = value.payload;
//     },
//     setToken(state, value) {
//       state.token = value.payload;
//     },
//   },
// });

// export const { setSignupData, setLoading, setToken } = authSlice.actions;

// export default authSlice.reducer;
