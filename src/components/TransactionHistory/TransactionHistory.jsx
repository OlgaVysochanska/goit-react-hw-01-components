import PropTypes from 'prop-types';
import css from './transaction-history.module.css';

export const TransactionHistory = ({ items }) => {
  const tableBody = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td className={css.cell}>{type}</td>
        <td className={css.cell}>{amount}</td>
        <td className={css.cell}>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>{tableBody}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
