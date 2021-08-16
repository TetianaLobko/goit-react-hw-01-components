import React from "react";
import PropTypes from "prop-types";

import TransactionTable from "./TransactionTable";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
    return (
        <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <TransactionTable
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
        </tbody>
    </table>
)
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
