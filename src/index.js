import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { configureClient } from './api/client';
import storage from './utils/storage';
import  configureStore  from './store';

import './index.css';


//El PreloadedState nos va a permitir conservar la sesión
// aunque recargemos el navegador

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({
  preloadedState: { auth: !!accessToken }
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
