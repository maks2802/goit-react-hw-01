import styles2 from "./TransactionHistoryRow.module.css";

const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <tr className={styles2.row}>
      <td className={styles2.border}>{type}</td>
      <td className={styles2.border}>{amount}</td>
      <td className={styles2.border}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryRow;
