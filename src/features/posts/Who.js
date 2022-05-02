import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postSlice";
import { validatorArray } from "../../app/Navbar";
import { Result } from "./Result";



export const Who = ({ match }) => {

    console.log(match)
    const { questId } = match.params


    const dispatch = useDispatch()

    const quest = useSelector(state =>
        state.posts.find(post => post.quest == questId)
    )


    const [answer, setAnswer] = useState({ who: '', what: '', when: '', where: '' })
    console.log(quest.content)
    console.log(quest)
    console.log(answer);


    const onAnswerChanged = e => setAnswer({ ...answer, [`${questId}`]: e.target.value })

    const onSaveAnswer = () => {
        if (answer[questId]) {
            dispatch(postUpdated({ quest: questId, content: answer[`${questId}`] }))

        }
    }


    if (validatorArray.every(x => x > 0)) {
        return (
            <Result />
        )
    }

    return (

        < section className="main-section">

            <h2 style={{ color: 'white' }}>{quest.quest}?</h2>
            <form>
                <label htmlFor="questInput"></label>
                <input type='text' id='questInput' name="questInput"
                    placeholder={answer[questId]} value={answer[questId]}
                    onChange={onAnswerChanged}></input>
                <button type="button" className="button" onClick={onSaveAnswer}>Answer</button>

            </form>
        </section >
    )


}





