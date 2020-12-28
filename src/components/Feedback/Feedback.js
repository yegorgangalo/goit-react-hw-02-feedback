import React, {Component} from "react";

class Feedback extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    static propTypes = {
        //
    }

    state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad
    }

    addFeedback = (val) => {
        this.setState((prevState) => {
            return {
                [val]: prevState[val] + 1
            }
        });
    }

    countTotalFeedback() {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }

    countPositiveFeedbackPercentage() {
        return Math.round(this.state.good / this.countTotalFeedback() * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <h1>Please leave Feedback</h1>
                <button type='button' className="button" value="good" onClick={({target}) => {
                    this.addFeedback(target.value);
                }}>Good</button>
                <button type='button' className="button" value="neutral" onClick={({target}) => {
                    this.addFeedback(target.value);
                }}>Neutral</button>
                <button type='button' className="button" value="bad" onClick={({target}) => {
                    this.addFeedback(target.value);
                }}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: <span>{good}</span></p>
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
                <p>Total: <span>{this.countTotalFeedback()}</span></p>
                <p>Positive feedback: <span>{`${this.countPositiveFeedbackPercentage()}%`}</span></p>
            </div>
        )
    }
}

export default Feedback;