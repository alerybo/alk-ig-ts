import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../shared/store/store";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface InitialState {
  posts: Post[];
  page: number;
  hasMore: boolean;
}

const initialState: InitialState = {
  posts: [],
  page: 1,
  hasMore: true,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts.push(...action.payload);
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
});

export const { addPosts, incrementPage, setHasMore } = postSlice.actions;
export default postSlice.reducer;

export const fetchPosts = () => async (dispach: any, getState: any) => {
  try {
    const { page } = getState().posts;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const newPosts = response.data;

    dispach(addPosts(newPosts));
    dispach(incrementPage());
    dispach(setHasMore(newPosts.length > 0));
  } catch (error) {
    console.error("Something went wrong...", error);
  }
};
