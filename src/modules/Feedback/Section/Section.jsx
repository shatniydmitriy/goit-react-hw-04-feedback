import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ children, title }) => {
  return (
    <section>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};