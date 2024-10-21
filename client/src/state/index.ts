import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // below is the function that changes our state.
    setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
        state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
        state.isDarkMode = action.payload;
  },
}});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
//we are going to create 2 different states within this as we want a dark mode accessible everywhere and closeopen sidebar
