import React, { Component } from 'react';

class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            }
        })
    }

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        return <div>
                <button type="button" onClick={this.show}>Show</button>
            <button type="button" onClick={this.hide}>Hide</button>
            <button type="button" onClick={this.toggle}>
                {visible ? 'Hide' : 'Show'}
                </button>
            {visible && <div>Falling Menu</div>}
                </div>
    }
}

export default Dropdown;