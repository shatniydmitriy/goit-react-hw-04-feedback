import { Component } from "react";

import styles from "./feedback.module.css";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    // общее количество отзывов
    // countTotalFeedback() {
    //     const { good, neutral, bad } = test.state;
    //     const total = good + neutral + bad;
    //     return total;
    // }

// процент положительных отзывов
    // countPositiveFeedbackPercentage(propName) {
    //     const total = this.countTotalFeedback();
    //     if (!total) {
    //         return 0;
    //     }
    //     const value = this.state[propName];
    //     const result = ((value / total) * 100).toFixed(2);
    //     return Number(result);

    // }

    render() {
        const { good, neutral, bad, total } = test.state;
        const goodPercent = this.countPositiveFeedbackPercentage("good");
        
        return (
            <div>
                <h3 className={styles.title}>Please leave feedback</h3>
                <div>
                    <button>Good</button>
                    <button>Natural</button>
                    <button>Bad</button>
                </div>
                <div>
                    <h4>Statistics</h4>
                    <ul>
                        <li>Good: { good }</li>
                        <li>Natural: { neutral }</li>
                        <li>Bad: { bad  }</li>
                        <li>Total: { total }</li>
                        <li>Positive feedback: { goodPercent } %</li>
                    </ul>

                </div>
            </div>
        )

    }
}

export default Feedback;