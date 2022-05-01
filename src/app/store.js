import { configureStore } from '@reduxjs/toolkit'
import { postsReducer, testReducer } from '../features/posts/postSlice'


export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
