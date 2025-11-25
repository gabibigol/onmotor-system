import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducer inicial para autenticação
const authInitialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'AUTH_LOGIN_SUCCESS':
      return { 
        ...state, 
        isAuthenticated: true, 
        user: action.payload.user, 
        token: action.payload.token,
        loading: false 
      };
    case 'AUTH_LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'AUTH_LOGOUT':
      return authInitialState;
    default:
      return state;
  }
};

// Reducer inicial para dispositivos
const devicesInitialState = {
  devices: [],
  loading: false,
  error: null
};

const devicesReducer = (state = devicesInitialState, action) => {
  switch (action.type) {
    case 'DEVICES_FETCH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'DEVICES_FETCH_SUCCESS':
      return { ...state, devices: action.payload, loading: false };
    case 'DEVICES_FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Combinando todos os reducers
const rootReducer = combineReducers({
  auth: authReducer,
  devices: devicesReducer
});

// Configurando a store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
