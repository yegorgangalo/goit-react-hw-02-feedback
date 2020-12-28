import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from './components/Notification';

class App extends Component {
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
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
        // return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }

    countPositiveFeedbackPercentage() {
        const { good } = this.state;
      return this.countTotalFeedback() === 0 ? 0 :
        Math.round(good / this.countTotalFeedback() * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
      return (
          <Section title="Please leave Feedback">
            <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
            {this.countTotalFeedback() === 0 ?
            <Notification message="No feedback given"/> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={`${this.countPositiveFeedbackPercentage()}%`}
            />}
          </Section>
        )
    }
}

export default App;
