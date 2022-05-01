import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const FirstPart = ({ match }) => {
    console.log(match.params)
    const { postId } = match.params
    console.log(postId)

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId))


    if (!post) {
        return (
            <section>
                <h2>Question not found!</h2>
            </section>
        )

    }

    return (
        <section>
            <article className="main-article">
                <h2>{post.title}</h2>
                <p className="post-content">{post.conent}</p>
                <Link to={`/editPost/${post.id}`} className="button"></Link>
                <input type='text' placeholder={post.conent}></input>
            </article>
        </section>
    )

}