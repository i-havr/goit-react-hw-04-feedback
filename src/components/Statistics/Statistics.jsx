import PropTypes from 'prop-types';
import { StatisticsStyled } from './Statistics.styled';

export const Statistics = ({
  good = {},
  neutral = {},
  bad = {},
  total = {},
  positivePercentage = {},
}) => {
  return (
    <StatisticsStyled>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
