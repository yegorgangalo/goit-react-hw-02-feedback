import React, { Component } from 'react';
import Controls from "./Controls/Controls";
import Value from "./Value/Value";

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0,
    //     };
    // }

    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        //
    }

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = () => {
        // this.setState({
        //     value: 10,
        // });
        this.setState((prevState) => {
            return {
                value: prevState.value + 1,
            }
        });
    };
    // handleIncrement = (event) => {
    //     console.log('click');
    //     console.log(this);
    //     console.log(event.target);

    //     setTimeout(() => {
    //         console.log(event.target);
    //     }, 1000);
    // };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        return <div>
            <Value value={this.state.value}/>
            <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
                    {/* <span>{this.state.value}</span> */}
                    {/* <div>
                        <button type="button" onClick={this.handleIncrement}>Increment by 1</button>
                        <button type="button" onClick={this.handleDecrement}>Decrement by 1</button>
                    </div> */}
                </div>
    }
}

export default Counter;