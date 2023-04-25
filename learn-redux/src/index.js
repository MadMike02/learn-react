import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
import allReducer from './reducers'
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//global store

//some action(do on store)
// const increment = () =>{
//   return {
//     type : 'INCREMENT'
//   }
// }

// const decrement = () =>{
//   return {
//     type : 'DECREMENT'
//   }
// }

//reducer
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state+1;
//     case "DECREMENT":
//       return state-1;
//   }
// }

// let store = createStore(counter)

//display in console
// store.subscribe(()=> console.log(store.getState()));

//dispatch (action come here and go on reducer to change store)
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

ReactDOM.render(
  //passing state
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
