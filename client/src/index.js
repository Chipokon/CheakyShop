import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "mobx-react";

const stores = {
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...stores}>
      <App />
  </Provider>
);