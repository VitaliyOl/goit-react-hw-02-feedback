import React from 'react';

export const Statistics = ({ good, neutral, bad, total = 0, percent = 0 }) => {
  return total ? (
    <div>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
      <p>{total}</p>
      <p>{percent}</p>
    </div>
  ) : (
    <h2>There is no feedback</h2>
  );
};
