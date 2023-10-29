
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
 

  
clickOnButton = option => {this.setState((prevState) => {
  return {
    [option]: prevState[option] + 1,
  };
}); }
  
countTotalFeedback = () => {return this.state.good + this.state.neutral + this.state.bad};
countPositiveFeedbackPercentage = () => {
const result = Math.ceil(((this.state.good - this.state.bad + this.state.neutral) / this.countTotalFeedback()) * 100).toFixed(0)
if (result < 0) { return 0 };
return result;
};

  
onLeaveFeedback = evt => {
  const option = evt.target.textContent;
  this.clickOnButton(option)
};

  render() {
    
    const state = this.state;

    return ( 
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
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