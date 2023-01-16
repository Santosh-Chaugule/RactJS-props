import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//lets create another functional component
function Ok() {
  return <span >this is related to Frontend </span>
}

//lets create our first RFC
function My({ man }) {
  return (
    <span className='man'>I am Santosh MERN stack developer {man}<Ok /></span>
  )
}

const root = ReactDOM.createRoot(document.getElementById('santosh'));
root.render(
  <React.StrictMode>
    <h1>hi Santosh <My man={"santosh chaugule"} /></h1>
  </React.StrictMode>
);

document.getElementById('santosh')
reportWebVitals();
