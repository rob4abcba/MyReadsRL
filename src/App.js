import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Header from './components/Header'
import SearchButton from './components/SearchButton'
import Search from './components/Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  updateSearchPageState = showSearchPageTrueFalse => {
    console.log("showSearchPageTrueFalse = ", showSearchPageTrueFalse);
    console.log("state = ", this.state);
    this.setState({showSearchPage: showSearchPageTrueFalse });
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState( {books: resp}));
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search updateSearchPageStateYo={this.updateSearchPageState}/>
        ) : (
          <div className="list-books">
            <Header />
            <Shelves allBooks={this.state.books} />
            <SearchButton updateSearchPageStateYo={this.updateSearchPageState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
