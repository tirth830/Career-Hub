import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      if (!action.payload) {
        state.user = null;
        localStorage.removeItem("user");
        return;
      }

      const user = action.payload;
      const userImage = user.image
        ? user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
      const updatedUser = { ...user, image: userImage };

      state.user = updatedUser;
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, setLoading, logout } = profileSlice.actions;

export default profileSlice.reducer;
