import React from 'react';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, total = 0, percent = 0 }) => {
  return total ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percent} %</p>
    </div>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};
