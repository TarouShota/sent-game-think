import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', quest: 'who', content: '' },
    { id: '2', quest: 'what', content: '' },
    { id: '3', quest: 'when', content: '' },
    { id: '4', quest: 'where', content: '' },
]

//Who?
//  2. What?
//  3. When?
//  4. Where?

const initialValues = [
    { id: '1', quest: 'Who', content: '' },
    { id: '2', quest: 'What', content: '' },
    { id: '3', quest: 'When', content: '' },
    { id: '4', quest: 'Where', content: '' }
]
console.log(initialValues[3].content.length)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            console.log(action, action.type)
            state.push(action.payload)
        },
        postUpdated(state, action) {
            const { quest, content } = action.payload
            const existingPost = state.find(post => post.quest === quest)
            if (existingPost) {
                // existingPost.title = title
                existingPost.content = content
            }
        }
    }
})




export const { postAdded, postUpdated } = postsSlice.actions

export const postsReducer = postsSlice.reducer

