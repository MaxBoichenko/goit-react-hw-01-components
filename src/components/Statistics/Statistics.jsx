import PropTypes from 'prop-types';

import {
  Container,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const generateColor = () => {
  return '#' + Math.random().toString(16).substr(-6);
};

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title.length > 0 && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item bgColor={generateColor} key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
