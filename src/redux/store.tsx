import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default is localStorage for web
import { combineReducers } from 'redux';
import employeeReducer from './employeeSlice';

// Configuration de la persistance
const persistConfig = {
  key: 'root',
  storage,
};

// Combine les reducers
const rootReducer = combineReducers({
  employee: employeeReducer,
});

// Crée le reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crée le store avec redux-thunk et redux-persist
export const store = configureStore({
  reducer: persistedReducer,
  // Si getDefaultMiddleware n'est pas disponible, omettez cette partie
});

// Crée le persistor pour la persistance
export const persistor = persistStore(store);

// Types pour l'état et le dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
