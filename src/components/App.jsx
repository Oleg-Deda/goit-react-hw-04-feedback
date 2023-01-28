
import  { SectionTitle }from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import  { Notification }from './Notification/Notification';
import  { FeedbackOptions }from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

const Titles = {
  feedback: 'Please leave feedback',
  statistics: 'Statistics',
};

export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 
const feedbackHandler = evt => {
  switch (evt.target.textContent){
    case 'good':
   setGood(prevState => prevState +1);
    break;
    case 'neutral':
    setNeutral(prevState => prevState +1);
    break;
    case 'bad':
    setBad(prevState => prevState +1)  
    break;
    default: 
    break;
  }
};

const total =  good + neutral + bad;
  
  const positiveFeedback  = ((good / total) * 100).toFixed(2);


  return(


      <>
        <SectionTitle title={Titles.feedback}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={feedbackHandler}
          />
        </SectionTitle>
        <SectionTitle title={Titles.statistics}>
        {total  ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback ={positiveFeedback }
                           
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
        </SectionTitle>
      </>
    );
  }
  
