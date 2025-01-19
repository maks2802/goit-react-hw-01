import TransactionHistoryRow from "../TransactionHistoryRow/TransactionHistoryRow";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.borderhead}>Type</th>
          <th className={styles.borderhead}>Amount</th>
          <th className={styles.borderhead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
