import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

export default function StatisticsList({ label, percentage }) {
  return (
    <li
    className={styles.item}
    style={{
      backgroundColor: `rgb( ${random()} , ${random()} , ${random()} )`,
    }}
  >
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
 )
};

function random() {
  return Math.floor(Math.random() * 256);
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};