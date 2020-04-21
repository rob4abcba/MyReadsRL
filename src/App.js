import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import { Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";

class BooksApp extends React.Component {

  // Decided to put the .update method below in MainPage.js & SearchPage.js instead of here:
  // updateBookShelfStateRW = (book, shelf) => {
  //   BooksAPI.update(book, shelf)
  //   .then(resp => {
  //     book.shelf = shelf;
  //     this.setState(state => ({
  //       books: state.books.filter(b => b.id !== book.id).concat([book])
  //     }))
  //   })
  // };

  render() {
    return (
      <div>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    );
  }
}

export default BooksApp;
