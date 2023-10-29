
import  { useState } from 'react';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import ListStatistics from './ListStatistics/ListStatistics';

import Section from './Section/Section';


export default function App (){
  
const [good , setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBed] = useState(0);

const clickOnButton = option => {
  switch (option) {
    case 'good':
      setGood(good + 1);
      break;
    case 'neutral':
      setNeutral(neutral + 1);
      break;
    case 'bad':
      setBed(bad + 1);
      break;
    default: console.error("error case option")
 }
};

const countTotalFeedback = () => good + neutral + bad;

const countPositiveFeedbackPercentage = () => {
const result = Math.ceil(((good - bad + neutral) / countTotalFeedback()) * 100).toFixed(0)
if (result < 0) { return 0 };
return result;
};

  
const onLeaveFeedback = evt => {
  const option = evt.target.textContent;
  clickOnButton(option)
};  
  
return ( 
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{good,neutral,bad}}
            onLeaveFeedback={onLeaveFeedback}
            />
        </Section>
        <Section  title={'Statistics'}>
          {countTotalFeedback() > 0 ?(
            <ListStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
            />
          ): (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    )

}

