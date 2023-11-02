import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from "./Shopping.js";
import {Component} from 'react';
import TestButton from './Button.js';
import Form from './formValidation.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Shop />

    </div>

<div><TestButton/></div>

<div><Form/></div>

  </React.StrictMode>
);
