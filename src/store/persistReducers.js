import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'dh',
      storage,
      whitelist: ['auth', 'view', 'user', 'case', 'people', 'documents'],
    },
    reducers
  );

  return persistedReducer;
};
