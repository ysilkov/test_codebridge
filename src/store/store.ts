import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "./articleReducer";

const store = configureStore({
  reducer: {
    articles: ArticleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;