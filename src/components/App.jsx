
import React, { Component } from 'react';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import ListStatistics from './ListStatistics/ListStatistics';

import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
 


clickGood = () => {this.setState({ good: this.state.good + 1 });};
clickNeutral = () => { this.setState({ neutral:this.state.neutral + 1 }); };
clickBad = () => { this.setState({ bad: this.state.bad + 1 }); };
  
countTotalFeedback = () => {return this.state.good + this.state.neutral + this.state.bad};
countPositiveFeedbackPercentage = () => { return Math.ceil(((this.state.good - this.state.bad + this.state.neutral) / this.countTotalFeedback()) * 100).toFixed(0) };
  
  onLeaveFeedback = evt => {
    if (evt.target.textContent === Object.keys(this.state)[0]) {
      return this.clickGood()
    } else if (evt.target.textContent === Object.keys(this.state)[1]) {
      return this.clickNeutral()
    } else if (evt.target.textContent === Object.keys(this.state)[2]) {
      return this.clickBad()
    }
    return
  };

  render() {
    
    const state = this.state;

    return ( 
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={state}
            onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>
        <Section  title={'Statistics'}>
          {this.countTotalFeedback() > 0 ?(
            <ListStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
            />
          ): (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    )
  }
}

export default App;