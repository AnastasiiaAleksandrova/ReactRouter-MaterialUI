import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/about/about';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Post from './components/post/post';
import Header from './components/header/header';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Main} /> 
      <Route path='/about' exact component={About} /> 
      <Route path='/contact' exact component={Contact} />
      <Route path="/post/:id" component = {Post} />
    </Router>
    )   
}



