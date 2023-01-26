// import PropTypes from "prop-types";

import styles from './feedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
         <div className={styles.btnGroup}>
      {options.map(option => {
        return (
          <button
            className={styles.button}
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
        // <div className={styles.btnGroup}>

        //     <button className={styles.button} onClick={() => onLeaveFeedback("good")}>Good</button>
        //     <button className={styles.button} onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
        //     <button className={styles.button} onClick={() => onLeaveFeedback("bad")}>Bad</button>
                    
        // </div>
    )
}

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };