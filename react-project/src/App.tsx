import React from 'react';
import './App.css';
import { MyNewsletter } from './components';

function App() {
  return (
    <MyNewsletter onSubmitEvent={e => console.log(e.detail)} ></MyNewsletter>
  );
}

export default App;
