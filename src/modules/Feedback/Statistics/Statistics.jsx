import PropTypes from "prop-types";

import styles from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <ul className={styles.feedbackList}>
                <li className={styles.feedbackListItem}>Good: { good }</li>
                <li className={styles.feedbackListItem}>Neutral: { neutral }</li>
                <li className={styles.feedbackListItem}>Bad: { bad }</li>
                <li className={styles.feedbackListItem}>Total: { total }</li>
                <li className={styles.feedbackListItem}>Positive feedback: { positivePercentage } %</li>
            </ul>

        </div>

    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}