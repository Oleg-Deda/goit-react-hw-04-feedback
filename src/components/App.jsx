
import  { SectionTitle }from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import  { Notification }from './Notification/Notification';
import  { FeedbackOptions }from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

const Titles = {
  feedback: 'Please leave feedback',
  statistics: 'Statistics',
};

function App () {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 
const feedbackHandler = ({target}) => {
  switch (target.textContent){
    case 'good':
    return setGood(prevState => prevState +1)
    case 'neutral':
    return setNeutral(prevState => prevState +1)
    case 'bad':
    return setBad(prevState => prevState +1)  

    default: return 
  }
}

const totalFeedback = () => {
  return good + neutral + bad
  }

  const positiveFeedback = () => {
    return (good * 100 ) / totalFeedback;
  }

  return(

// feedbackHandler = evt =>  {
//   this.setState(prevState => {
//     return {
//       [evt.target.textContent]: prevState[evt.target.textContent] + 1,
//     };
//   });
// };

// countTotalFeedback = state =>
//     Object.values(state).reduce((acc, value) => acc + value, 0);

//     countPositiveFeedbackPercentage = ({ good }) =>
//     ((good / this.countTotalFeedback(this.state)) * 100).toFixed(2);

  // render() {
  //   const { good, neutral, bad } = this.state;
    // return (
      <>
        <SectionTitle title={Titles.feedback}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={feedbackHandler}
          />
        </SectionTitle>
        <SectionTitle title={Titles.statistics}>
        {totalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positive={positiveFeedback()}
                           
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
        </SectionTitle>
      </>
    );
  }
  export default App;
