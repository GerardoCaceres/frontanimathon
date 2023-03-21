import React from 'react';

import Header from './components/header/Header';
import List from './components/list/List';
import Footer from './components/footer/Footer';
import Button from './components/Button/Button';
import './App.css';
import data from './data';

const App = () => {
  return (
    <div className='App'>
      <Header data={data.header}/>
			<List data={data.list}/>
			<Footer data={data.footer}/>
			<Button data={data.button}/>
    </div>
  )
};

export default App;