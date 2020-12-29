import React from 'react';
import s from './Statistics.module.css';

export default function Statistics(props) {
    const propsArray = [...Object.entries(props)];
    return <>
        <h2 className={s.title}>Statistics</h2>
        {propsArray.map(([key, value]) =>
            <p key={key} className={s.statElem}>
                <span className={s.statKey}>{key}: </span>
                <span className={s.statVal}>{value}</span>
            </p>)}
        </>
}