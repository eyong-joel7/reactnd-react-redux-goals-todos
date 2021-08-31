import {combineReducers} from 'redux'
import goals from './goal';
import loading from './loading';
import todos from './todos';

const rootReducer = combineReducers({
    todos:todos,
    goals: goals,
    loading: loading
  });

  export default rootReducer