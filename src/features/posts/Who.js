import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postSlice";
import { useHistory } from "react-router-dom";
import { What } from "./What";
import { When } from "./When";
import { Where } from "./Where";



export const Who = ({ match }) => {

    console.log(match)
    const { questId } = match.params


    const dispatch = useDispatch()
    const history = useHistory()

    const quest = useSelector(state =>
        state.posts.find(post => post.quest == questId) //     state.posts.find(post => post.id === postId))
    )


    const [answer, setAnswer] = useState({ who: '', what: '', when: '', where: '' })
    console.log(quest.content)
    console.log(quest)
    console.log(answer);

    const onAnswerChanged = e => setAnswer({ ...answer, [`${questId}`]: e.target.value })

    const onSaveAnswer = () => {
        if (answer[questId]) {
            dispatch(postUpdated({ quest: questId, content: answer[`${questId}`] }))
            // setAnswer('')
            // history.push(`/quests/${questId}`)
        }
    }

    return (

        < section >

            <h2>{quest.quest}</h2>
            <form>
                <label htmlFor="questInput"></label>
                <input type='text' id='questInput' name="questInput" placeholder={answer[questId]} value={answer[questId]} onChange={onAnswerChanged}></input>
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


