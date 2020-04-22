import React from "react";

class Book extends React.Component {

  componentDidMount() {
    console.log(this)
  }

  render() {
    // const shelfBooks = this.props.books;
    return (
    //   {/* <div className="bookshelf">
    //     <h2 className="bookshelf-title">{this.props.title}</h2>
    //     <div className="bookshelf-books">
    //       <ol className="books-grid">
    //         {shelfBooks.map(book => (
    //           <li key={book.id}> */}
            <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VmfphhWdLzi8c69ruE0rLVSDj4lbokmQJC49uwZFJvn5rdaE&usqp=CAU'
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select value={this.props.book.shelf || "none"} onChange={e => this.props.changeShelf(this.props.book, e.target.value)}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{this.props.book.title}</div>
                  <div className="book-authors">{this.props.book.authors}</div>
                </div>
              </li>
    //         ))}
    //       </ol>
    //     </div>
    //   </div>
    );
  }
}

export default Book;
