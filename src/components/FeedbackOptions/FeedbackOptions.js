import React from 'react';

export default function FeedbackOptions(props) {
    const { options, onLeaveFeedback} = props;
    const optionsArray = [...Object.keys(options)];
    return <>
        {optionsArray.map(option =>
            <button
                key={option}
                type='button'
                className="button"
                value={option}
                onClick={({ target }) =>
                    onLeaveFeedback(target.value)
                }>
                {option}
            </button>)}
        </>
}