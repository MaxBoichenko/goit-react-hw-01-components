import PropTypes from 'prop-types';

import {
  TableContainer,
  TBody,
  TD,
  TH,
  THead,
  TR,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <THead>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </THead>

      <TBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TR key={id}>
              <TD>{type}</TD>
              <TD>{amount}</TD>
              <TD>{currency} </TD>
            </TR>
          );
        })}
      </TBody>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
