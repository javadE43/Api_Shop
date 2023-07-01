import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface InitialStateAuth {
  username: string | null;
  accessToken: string | null;
  role: number;
}

const initialState: InitialStateAuth = {
  username: "",
  accessToken: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "",
  role:  Number(JSON.parse(`${ sessionStorage.getItem("role")}`))? Number(JSON.parse(`${ sessionStorage.getItem("role")}`)) : 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken, role } = action.payload?.data?.data;
      state.username = username;
      state.accessToken = accessToken;
      state.role = role.role;
      sessionStorage.setItem("token", accessToken);
      sessionStorage.setItem("role", role.permission);
    },
    logOut: (state) => {
      state.username = null;
      state.accessToken = null;
      state.role = 0;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
    },
  },
});

//
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

//selector
export const selectCurrentUser = (state: RootState) => state.auth.username;
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentRole = (state: RootState) => state.auth.role;
