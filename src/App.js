import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Header from './components/Header'
import SearchButton from './components/SearchButton'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  updateSearchPageState = showSearchPageTrueFalse => {
    console.log("showSearchPageTrueFalse = ", showSearchPageTrueFalse);
    this.setState({showSearchPage: showSearchPageTrueFalse });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search updateSearchPageStateYo={this.updateSearchPageState}/>
        ) : (
          <div className="list-books">
            <Header />
            <Shelves />
            <SearchButton updateSearchPageStateYo={this.updateSearchPageState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
