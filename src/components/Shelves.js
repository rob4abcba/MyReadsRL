import React from 'react';
import Shelf from './Shelf';

class Shelves extends React.Component {
    render() {
        const allBooks = this.props.allBooks;
        console.log("allBooks = ", allBooks);
        const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
        const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
        const read = allBooks.filter(book => book.shelf === "read");
        
        return(
            <div className="list-books-content">
            <div>
                <Shelf books={currentlyReading} title="Currently Reading Yo" changeShelf={this.props.changeShelf}/>
                <Shelf books={wantToRead} title="Want to Read Yo" changeShelf={this.props.changeShelf}/>
                <Shelf books={read} title="Read Yo" changeShelf={this.props.changeShelf}/>
            </div>
          </div>

        )
    }
}

export default Shelves;
