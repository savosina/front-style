import React, { Component } from 'react';
//import { BrowserRouter, Route, Link } from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory'
import ArticleList from './components/articles/article-list.js'
import Counter from './components/counter.js'
//import About from './about.js'
//import Blog from './blog.js'
import './App.css';
//import articles from './fixtures'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="container">
            <header className="header">
            </header>
            <section className="content">
                <Counter />
                <ArticleList />
            </section>
          </div>
          <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
