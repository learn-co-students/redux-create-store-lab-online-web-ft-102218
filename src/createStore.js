import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  let state;

  function getState() {
    return reducer(state, {type: '@@INIT'});
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  return { dispatch, getState }
}

function render() {
  const container = document.getElementById('container');
}
