import React from 'react';
import ReactDOM from 'react-dom';
import { configureClient } from './api/client';
import storage from './utils/storage';
import  configureStore  from './store';
import Root from './Root';

import './index.css';


//El PreloadedState nos va a permitir conservar la sesión
// aunque recargemos el navegador

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({
  preloadedState: { auth: !!accessToken}
});


ReactDOM.render(
    <Root store={store}/>,
  document.getElementById('root')
);
