import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from "../../BooksAPI";

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        books: [],
        query: "",
        results: []
    }
  }

  componentDidMount() {
    console.log(this)
    BooksAPI.getAll().then(resp => {
      console.log(resp)
      this.setState({books: resp})
    })
  }

  updateQuery = (query) => {
    this.setState( {query: query}, this.submitSearch);
  }

  submitSearch() {
    if(!this.state.query) {
      return this.setState( { results: [] });
    }
    BooksAPI.search(this.state.query.trim() ).then(res => {
      console.log(res)
      if(res.error) {
        return this.setState( { results: [] });
      } else {
        console.log("Look for matches baby!!")
        res.forEach( b => {
          let f = this.state.books.filter( B => B.id === b.id);
          if(f[0]) {
            console.log("Found a match baby!!")
            b.shelf = f[0].shelf;
          }
        })
        return this.setState( { results:res })
      }
    })
  }

  updateBookShelfStateRW = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  };

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">

              {/* <button className="close-search" onClick={() => this.props.updateSearchPageStateYo(false)}>Close</button> */}
              <Link className="close-search" to="/">Close</Link>  

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author man" value={this.state.query} 
                  onChange={ (event) => this.updateQuery(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.results.map( (item,key) => console.log(item, key))
              }
              </ol>
            </div>
          </div>
        )
    }
}
export default SearchPage