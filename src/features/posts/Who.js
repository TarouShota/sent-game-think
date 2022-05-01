import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postSlice";
import { useHistory } from "react-router-dom";


export const Who = ({ match }) => {

    console.log(match)
    const { questId } = match.params


    const dispatch = useDispatch()
    const history = useHistory()

    const quest = useSelector(state =>
        state.posts.find(post => post.id === questId) //     state.posts.find(post => post.id === postId))
    )


    const [answer, setAnswer] = useState(quest.content)
    console.log(quest.content)
    console.log(questId)
    console.log(answer);

    const onAnswerChanged = e => setAnswer(e.target.value)

    const onSaveAnswer = () => {
        if (answer) {
            dispatch(postUpdated({ id: questId, content: answer }))
            // setAnswer('')
            history.push(`/quests/${questId}`)
        }
    }

    return (

        < section >

            <h2>{quest.quest}</h2>
            <form>
                <label htmlFor="questInput"></label>
                <input type='text' id='questInput' name="questInput" placeholder={answer} value={answer} onChange={onAnswerChanged}></input>
                <button type="button" onClick={onSaveAnswer}></button>
            </form>
        </section >
    )
}

// <form>
//                 <label htmlFor="postTitle">Post Title:</label>
//                 <input type="text"
//                     id="postTitle"
//                     name="postTitle"
//                     placeholder="What's on your mind?"
//                     value={title}
//                     onChange={onTitleChanged} />
//                 <label htmlFor="postContent">Content:</label>
//                 <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

//             </form>
//             <button type='button' onClick={onSavePostClicked}></button>


