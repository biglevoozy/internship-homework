import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counter/counterSlice";
import postsReducer from "@/redux/features/posts/postsSlice";
import formReducer from "@/redux/features/form/formSlice";
import { actionLogger } from "@/redux/middleware/actionLogger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLogger),
});
