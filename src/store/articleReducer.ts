import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleState } from "../helper";



const initialState: articleState = {
  articles: [], 
  error: null,
  loading: false,
  article: [],
} 

export const getArticle = createAsyncThunk(
  "articles/getList",
  async (_, { dispatch }) => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles",
        {
          headers: { 
            "accept": "application/json"
             },
        }
      );
      const data = await response.json();
      dispatch(addArticles(data));
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
    }
  }
);
console.log(getArticle())
export const articleSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    }
  }
});
export const { addArticles } = articleSlice.actions;
export default articleSlice.reducer;
