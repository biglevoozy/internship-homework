import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  userId: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleTitleChange: (state, action) => {
      state.title = action.payload;
    },
    handleBodyChange: (state, action) => {
      state.body = action.payload;
    },
    handleUserIdChange: (state, action) => {
      state.userId = action.payload;
    },
    handleResetForm: (state) => {
      state.title = initialState.title;
      state.body = initialState.body;
      state.userId = initialState.userId;
    },
  },
});

export const {
  handleTitleChange,
  handleBodyChange,
  handleUserIdChange,
  handleResetForm,
} = formSlice.actions;
export default formSlice.reducer;
