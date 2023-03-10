import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
      <li
        key={id}
        style={{ backgroundColor: `#${randomColor}` }}
        className={css.item}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
      </li>
    );
  });

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>{elements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
