import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: "First Post!", content: 'Hello' },
    { id: '2', title: 'Second Post!', content: 'You good?' }
]
const testState = [
    { id: '1', title: 'ChupapiTest' }
]
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            console.log(action, action.type)
            state.push(action.payload)
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})


const testSlice = createSlice({
    name: 'test',
    testState,
    reducers: {}
})

export const { postAdded, postUpdated } = postsSlice.actions

export const postsReducer = postsSlice.reducer
export const testReducer = testSlice.reducer
