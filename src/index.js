import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


async function enanbleMocking() {

  console.log('Mocking:' + process.env.REACT_APP_USE_MOCK_BACKEND);
  if (process.env.REACT_APP_USE_MOCK_BACKEND === 'false') {
    console.log('mocking is disabled');
    return;
  }

  const { worker } = await import('../src/mocks/browser');
  console.log('worker started');
  return worker.start()

}

enanbleMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
