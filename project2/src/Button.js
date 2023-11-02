import React from 'react';
import ReactDOM from 'react-dom';
import Form from './formValidation';

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const TestButton = () => {

    const handleClick = () => {
      console.log('Button clicked');
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
            <div><Form/></div>
      );
    };
  
    return (
      <div>

        <Button onClick={handleClick} label="Checkout" />
      </div>
    );
  };

export default TestButton;