import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Experience from './Experience';
import reportWebVitals from './reportWebVitals';
import Education from './Education';
import Skills from './Skills';
import Declaration from './Declaration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Experience />
    <Education />
    <Skills />
    <Declaration />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
