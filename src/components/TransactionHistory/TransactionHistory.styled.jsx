import styled from 'styled-components';

export const TableContainer = styled.table`
  margin: 0 auto;
  width: 600px;
  text-align: center;
`;
export const THead = styled.thead`
  background-color: turquoise;
`;
export const TBody = styled.tbody``;
export const TR = styled.tr`
  &:nth-child(even) {
    background-color: rgba(12, 101, 80, 0.16);
  }
`;
export const TH = styled.th`
   text-transform: uppercase;
  padding: 20px;
`;
export const TD = styled.td`
  padding: 10px;
`;
