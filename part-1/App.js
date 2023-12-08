import React from 'react';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <NamedComponent name="Austin" />
    </div>
  );
};