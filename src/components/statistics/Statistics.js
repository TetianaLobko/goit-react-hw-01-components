import React from 'react';
import PropTypes from "prop-types";
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className={styles.statistics}>
  <h2 className={styles.title}>Upload stats</h2>
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <StatisticsList
        key={id}
        label={label}
        percentage={percentage}
      />
    ))}
  </ul>
</section>
  )
};
  Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
};