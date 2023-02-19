import { useState } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from './Section/Section';
import Notification from './Notification/Notification';


const Feedback = () => {
    const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    });
  
  const statePropNames = Object.keys(feedback);
  
    const onLeaveFeedback = feedback => {
    setFeedback(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  }

    const total = feedback.good + feedback.neutral + feedback.bad;
    const countPositiveFeedbackPercentage = propName => {
      if (!total) {
        return 0;
    }
    const value = feedback[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

    const positiveFeedback = countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = feedback;
  return (
        
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={statePropNames}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );


  //  state = {
  
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  
  // statePropNames = Object.keys(this.state);
  
  // onLeaveFeedback = feedback => {
  //   this.setState(prevState => {
  //     return { [feedback]: prevState[feedback] + 1 };
  //   });
  // };

  // countTotalFeedback() {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // }


  // countPositiveFeedbackPercentage(propName) {
  //   const total = this.countTotalFeedback();
  //   if (!total) {
  //     return 0;
  //   }
  //   const value = this.state[propName];
  //   const result = ((value / total) * 100).toFixed(2);
  //   return Number(result);
  // }

  // render() {
  //   const total = this.countTotalFeedback();
  //   const positiveFeedback = this.countPositiveFeedbackPercentage('good');
  //   const { good, neutral, bad } = this.state;
  //   return (
  //     <>
  //       <Section title="Please leave feedback">
  //         <FeedbackOptions
  //           options={this.statePropNames}
  //           onLeaveFeedback={this.onLeaveFeedback}
  //         />
  //       </Section>
  //       {this.countTotalFeedback() !== 0 ? (
  //         <Section title="Statistics">
  //           <Statistics
  //             good={good}
  //             neutral={neutral}
  //             bad={bad}
  //             total={total}
  //             positiveFeedback={positiveFeedback}
  //           />
  //         </Section>
  //       ) : (
  //         <Notification message="There is no feedback" />
  //       )}
  //     </>
  //   );
  // }

}


export default Feedback;