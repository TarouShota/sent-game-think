import { createSlice } from "@reduxjs/toolkit";

/* Creating an array of objects. */
const initialState = [
    { id: "1", quest: "who", content: "" },
    { id: "2", quest: "what", content: "" },
    { id: "3", quest: "when", content: "" },
    { id: "4", quest: "where", content: "" },
];
/* Creating a slice of the state. */
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postUpdated(state, action) {
            const { quest, content } = action.payload;
            const existingPost = state.find((post) => post.quest === quest);
            if (existingPost) {
                // existingPost.title = title
                existingPost.content = content;
            }
        },
    },
});

export const { postUpdated } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
