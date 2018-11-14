import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import SearchPage from './SearchPage';
import MainPage from './MainPage';


import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  /*fetching BookAPI */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })   
  }

  render() {
    console.log(this.state.books);
    return (
      
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
          books={this.state.books}
          moveBook={this.moveBook}
          />
        )} />

        <Route path="/search" render={() => (
          <SearchPage
          moveBook={this.moveBook}
          books={this.state.books}
          />
        )} />

        
       
      </div>
    )
  }
}

export default BooksApp
