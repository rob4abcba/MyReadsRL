import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              {/* button "close-search" here in Search.js got changed to Link in SearchPage.js */}
              <button className="close-search" onClick={() => this.props.updateSearchPageStateYo(false)}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author man"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}
export default Search