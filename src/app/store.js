import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../features/posts/postSlice'


/* Exporting the store. */
export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
