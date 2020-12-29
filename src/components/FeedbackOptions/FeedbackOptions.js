import React from 'react';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
    const { options, onLeaveFeedback} = props;
    const optionsArray = [...Object.keys(options)];
    return <>
        {optionsArray.map(option =>
            <button
                key={option}
                type='button'
                className={s.button}
                value={option}
                onClick={({ target }) =>
                    onLeaveFeedback(target.value)
                }>
                {option}
            </button>)}
        </>
}