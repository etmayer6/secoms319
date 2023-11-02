import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const TestButton = () => {

    const handleClick = () => {
      console.log('Button clicked');
    };
  
    return (
      <div>

        <Button onClick={handleClick} label="Click Me" />
      </div>
    );
  };

export default TestButton;