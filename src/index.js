import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function FunnyGame() {
  const [userValue, setUserValue] = React.useState(50);
  const [isPending, setIsPending] = React.useState(false);
  const onChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 100) {
      setIsPending(false);
      setUserValue(value);
    }
    if (value == '') {
      setIsPending(true);
    }
  }
  return (
    <>
      <h3>Смешная игра "Заполни блок"</h3>
      <label>
        Процент заполнения:
        <input type="number" min="0" max="100" value={userValue} onChange={onChange}/>
      </label>
      <FunnyBlock progress={userValue} pending={isPending}/>
    </>
  )
}

function FunnyBlock(props) {
  return (
    <div class="block">
      <div class="progress" style={{width: `${props.pending ? '100' : props.progress}%`, background: `${props.pending ? 'red' : '#4CAF50'}`}}></div>
    </div>
  )
}


root.render(
  <React.StrictMode>
    <FunnyGame />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
