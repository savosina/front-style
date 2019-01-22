import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import ArticleList from './components/articles/article-list.js'
import About from './about.js'
import Blog from './blog.js'
import './App.css';
import articles from './fixtures'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="container">
            <header className="header">
                <BrowserRouter history={history}>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>

                    <Route exatc path='/' component={<About/>} />
                    <Route exatc path='/' component={<Blog/>} />
                </BrowserRouter>
            </header>
            <section className="content">
                <ArticleList articles = {articles}/>
            </section>
          </div>
          <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
