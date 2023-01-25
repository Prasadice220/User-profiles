import { configureStore } from '@reduxjs/toolkit'
import { counterSlice} from './SliceCreate'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, counterSlice.reducer)
export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    middleware: [thunk]
  },
})
export const persistor = persistStore(store)