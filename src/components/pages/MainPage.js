import React from "react";
// import * as BooksAPI from './BooksAPI'

import { Route } from "react-router-dom";

import Shelves from "../../components/Shelves";
import Header from "../../components/Header";
import SearchButton from "../../components/SearchButton";
import SearchPage from "../../components/pages/SearchPage";
import * as BooksAPI from "../../BooksAPI";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        books: []
    }
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };

  updateSearchPageState = showSearchPageTrueFalse => {
    console.log("showSearchPageTrueFalse = ", showSearchPageTrueFalse);
    console.log("state = ", this.state);
    this.setState({ showSearchPage: showSearchPageTrueFalse });
  };

  // updateBookShelfState = (book, shelf) => {
  //   console.log("book = ", book);
  //   console.log("shelf = ", shelf);
  //   console.log("state = ", this.state);
  //   this.setState({
  //     books: this.state.books.map(b => {
  //       (b.id === book.id) ? (b.shelf = shelf) : b;
  //       return b;
  //     })
  //   });
  // };

  updateBookShelfStateRW = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  };

  componentDidMount() {
    // BooksAPI.getAll().then(resp => this.setState({ books: resp }));
    BooksAPI.getAll().then(resp => {
      console.log(resp)
      this.setState({books: resp})
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage updateSearchPageStateYo={this.updateSearchPageState} />
        ) : (
          <div className="list-books">
            <Header />
            <Shelves
              allBooks={this.state.books}
              changeShelf={this.updateBookShelfStateRW}
            />
            <SearchButton
              updateSearchPageStateYo={this.updateSearchPageState}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MainPage;
