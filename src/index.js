import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './App';
import './index.css'

const store = configureStore();

const app = (
      <Provider store={store}>
          <App />
      </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
