import React from 'react';
import Tweet from './Tweet';

const App = () => {
  const tweets = [
    { username: 'johndoe', name: 'John Doe', date: '10/10/2023', message: 'Hello World!' },
    { username: 'janedoe', name: 'Jane Doe', date: '10/11/2023', message: 'Hi, planet!' },
    { username: 'joeshmoe', name: 'John Shmoe', date: '10/12/2023', message: 'Hello, universe!' },
  ];

  return (
    <div>
      {tweets.map(tweet => (
        <Tweet key={tweet.username} {...tweet} />
      ))}
    </div>
  );
};

export default App;
