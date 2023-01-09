import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from './FeedbackOptions.styled';
import { Button } from 'components/FeedbackOptions/Button/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(option => {
        return (
          <Button key={option} actionHandler={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        );
      })}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
