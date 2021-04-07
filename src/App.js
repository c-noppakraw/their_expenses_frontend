import React from 'react';
import { Provider } from 'react-redux';
import store from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;