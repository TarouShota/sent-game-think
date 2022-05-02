import React, { useState } from "react";
import { postUpdated } from "./postSlice";
import { validatorArray } from "../../app/Navbar";
import { Result } from "./Results";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


export const Who = ({ match }) => {
    // console.log(match)

    /* Destructuring the questId from the match.params object. */
    const { questId } = match.params;
    const dispatch = useAppDispatch();

    /* Finding the questId in the state.posts array. */
    const quest = useAppSelector((state) =>
        state.posts.find((post) => post.quest === questId)
    );
    console.log(quest?.quest)

    /* Setting the state of the answer to an empty string. */
    const [answer, setAnswer] = useState({
        who: "",
        what: "",
        when: "",
        where: "",
    });

    /**
     * When the answer changes, set the answer to the current question id and the value of the input.
     * @param e - the event object
     */
    const onAnswerChanged = (e) =>
        setAnswer({ ...answer, [`${questId}`]: e.target.value });




    /**
     * If the answer object has a property with the same name as the questId, then dispatch the
     * postUpdated action with the questId and the answer object's property value.
     */
    const onSaveAnswer = () => {
        if (answer[questId]) {
            dispatch(postUpdated({
                quest: questId, content: answer[`${questId}`],
                state: undefined
            }));
        }

    };

    /* Checking if the validatorArray has any values greater than 0. If it does, it will return the
    Result component. */
    if (validatorArray.every((x) => x > 0)) {
        return <Result />;
    }

    //to input {quest.quest}
    return (
        <section className="main-section">
            <h2 style={{ color: "white" }}>{quest?.quest}?</h2>
            <form>
                <label htmlFor="questInput"></label>
                <input
                    type="text"
                    id="questInput"
                    name="questInput"
                    placeholder={answer[questId]}
                    value={answer[questId]}
                    onChange={onAnswerChanged}

                ></input>
                <button type="button" className="button" onClick={onSaveAnswer}>
                    Answer
                </button>
            </form>
        </section>
    );
};
