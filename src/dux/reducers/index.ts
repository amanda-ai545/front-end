import usersReducer, { name as usersName } from '@dux/reducers/users';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [usersName]: usersReducer,
});

export default rootReducer;
