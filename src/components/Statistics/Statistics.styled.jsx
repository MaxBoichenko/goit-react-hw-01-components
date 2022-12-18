import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 500px;

  border-radius: 10px;

  text-align: center;
`;

export const Title = styled.h2`
  font-size: 25px;
`;

export const List = styled.ul`
  list-style: none;

  color: white;

  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${props => props.bgColor};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 14px;
`;
