import {QuakeQueryActionCreator} from '../actions/index'


function QuakeListReducer (initialState = {}, action){
  let newState;
  switch (action.type) {
    case 'QUAKE_QUERY':
      newState = {...initialState, quakes: action.quakes}
      return newState;
    default:
      return initialState;

  }
};

export default QuakeListReducer;
