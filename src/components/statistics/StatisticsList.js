import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

export default function StatisticsList({ label, percentage }) {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: `${
          "#" +
          (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
        }`,
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
