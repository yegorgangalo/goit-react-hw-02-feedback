import React from 'react';

export default function Section(props) {
    const { title, children } = props;
    return <section>
            <h1>{title}</h1>
            {children}
        </section>
}