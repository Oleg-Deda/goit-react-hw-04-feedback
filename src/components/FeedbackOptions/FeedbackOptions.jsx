
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { OptionsBox, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsBox>
    {options.map(option => (
      <OptionsButton key={nanoid()} type="button" onClick={onLeaveFeedback}>
        {option}
      </OptionsButton>
    ))}
  </OptionsBox>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};