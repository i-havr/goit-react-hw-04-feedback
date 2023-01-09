import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StyledApp } from './App.styled';
import { Notification } from 'components/App/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedbackCount = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedbackCount) * 100);
  };

  const valueIncrement = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <StyledApp>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={valueIncrement} />
      </Section>

      <Section title="Statistics">
        {totalFeedbackCount === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positivePercentage={countPositiveFeedbackPercentage() || 0}
          />
        )}
      </Section>
    </StyledApp>
  );
}
