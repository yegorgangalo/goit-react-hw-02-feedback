import React from 'react';

export default function Statistics(props) {
    const propsArray = [...Object.entries(props)];
    return <>
        <h2>Statistics</h2>
        {propsArray.map(([key, value]) =>
            <p key={key}>
                <span>{key}:</span>
                <span>{value}</span>
            </p>)}
        </>
}