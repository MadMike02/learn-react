// import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement } from './actions'

function App() {
  //accessing state
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.islogged)
  
  // console.log(increment)
  //setting dispathcer

  const dispatch = useDispatch()

  return (
    <div className="App">
      Hello
      
      <button onClick={ () =>  dispatch(increment(5))  }>+</button>
      <button onClick={ () =>  dispatch(decrement())  }>-</button>
      
      <h1>{counter}</h1>
      { isLogged ? <h3>INFO To NOT SEE</h3> : <h3>'NOT LOGGED'</h3> }
    </div>
  );
}

export default App;
