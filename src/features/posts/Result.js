import { useSelector } from "react-redux"
import React from "react";


export const Result = () => {
    let finalResult = ''
    let when = ''
    const result = useSelector(state =>
        state.posts.map((post, index) => {
            if (index == 2) {
                when = post.content
                return
            }
            finalResult = `${finalResult} ${post.content} `
        }))
    finalResult = `${finalResult} ${when} `
    return (
        <h1 className="result">{finalResult}</h1>
    )
}

