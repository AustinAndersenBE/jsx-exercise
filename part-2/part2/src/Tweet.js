// Tweet.js
import React from 'react';

const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h2>{name} (@{username})</h2>
      <p>{message}</p>
      <small>{date}</small>
    </div>
  );
};

export default Tweet;