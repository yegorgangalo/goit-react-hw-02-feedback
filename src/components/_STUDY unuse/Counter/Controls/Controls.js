import React from "react";

const Controls = ({onIncrement, onDecrement}) => (
    <div>
        <button type="button" onClick={onIncrement}>Increment by 1</button>
        <button type="button" onClick={onDecrement}>Decrement by 1</button>
    </div>
);

export default Controls;