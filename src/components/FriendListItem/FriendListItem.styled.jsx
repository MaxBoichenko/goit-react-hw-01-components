import styled from 'styled-components';

export const Item = styled.li`
  border: 1px dotted black;
  border-radius: 10px;
  list-style: none;

  display: flex;
  align-items: center;

  gap: 20px;
  max-width: 200px;
`;
export const Img = styled.img``;
export const Status = styled.span`
  display: inline-block;

  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'red' : 'green')};
`;
export const Text = styled.p``;
