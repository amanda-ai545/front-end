import { configureStore } from '@reduxjs/toolkit';

import reducer from '@dux/reducers';

const store = configureStore({
  reducer,
});

export default store;
