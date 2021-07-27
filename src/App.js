import React, { useState, useReducer, useContext, createContext } from 'react';
import './style.css';
import { ThemeContext } from './ThemeContext';

const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const WithApp = Component => {
  return () => {
    const [test, setTest] = useState('default');
    return <Component setTest={setTest} test={test} />;
  };
};

const handleChange = e => {
  console.log('input', { [e.target.name]: e.target.value });
};
const handleClick = () => {
  console.log('clicked');
};

function App({ test, setTest }) {
  const themeContext = useContext(ThemeContext); // this can only be accessed because this component is a children render prop for the context in index.js

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen {state.count}</p>
      <textarea name="textarea" onChange={handleChange} />
      <button onClick={() => dispatch({ type: 'increment' })}>Incement</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      {/* Current Theme: {themeContext.state} */}
      <button onClick={handleClick}>ChangeTheme</button>
    </div>
  );
}

export default WithApp(App);
