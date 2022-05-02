import { useSelector } from "react-redux"
import React from "react";


/**
 * It's a function that takes the state of the redux store, maps over it, and returns the content of
 * the posts. 
 * 
 * The reason I'm using a map function is because I'm using a redux store that has multiple posts. 
 * 
 * Reason for using a conditional is because I want to return the content of the third post in the end. 
 * 

 * @returns The result of the map function.
 */
export const Result = () => {
    let finalResult = ''
    let when = ''
    const result = useSelector(state =>
        state.posts.map((post, index) => {
            if (index === 2) {
                when = post.content
                return 1
            }
            return finalResult = `${finalResult} ${post.content} `
        }))
    finalResult = `${finalResult} ${when} `
    return (
        <h1 className="result">{finalResult}</h1>
    )
}

