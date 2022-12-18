import styled from 'styled-components';

export const Container = styled.div`
  padding 40px;
  background-color: #EAF7F6;
  width: 400px;
  margin: 20px auto;
  text-align: center;
  border-radius: 5px;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 16px;
  color: black;
  font-weight: 700;
`;

export const CardList = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  gap: 15px;
  justify-content: center;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.span`
  color: #658d89;
`;
