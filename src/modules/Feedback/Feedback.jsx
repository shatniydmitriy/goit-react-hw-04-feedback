import { Component } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from './Section/Section';
import Notification from './Notification/Notification';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

      statePropNames = Object.keys(this.state);
 
  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

        // общее количество отзывов
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

         // процент положительных отзывов
    countPositiveFeedbackPercentage(propName) {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const value = this.state[propName];
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);

    }

    // onLeaveFeedback = (name) => {
    //     this.setState(prevState => {
    //         return {[name]: prevState[name] + 1}
    //     })
    // }



    render() {
        const total = this.countTotalFeedback()
        const positivePercentage = this.countPositiveFeedbackPercentage("good");
        const { good, neutral, bad } = this.state;
        
        return (
             <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              Good={good}
              Neutral={neutral}
              Bad={bad}
              total={total}
              positiveFeedback={positivePercentage}
            />
          </Section>
        )}
        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </>
            // <>
            //     <Section title="Please leave feedback" />
            //     <FeedbackOptions
            //         options={this.statePropNames}
            //         onLeaveFeedback={this.onLeaveFeedback} />
            //     <h4 className={styles.subTitle}>Statistics</h4>
            //     <Statistics
            //         good={good}
            //         neutral={neutral}
            //         bad={bad}
            //         total={total}
            //         positivePercentage={positivePercentage} />
                
            // </>
        )

    }
}


export default Feedback;