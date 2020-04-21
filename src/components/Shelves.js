import React from 'react';
import Shelf from './Shelf';

class Shelves extends React.Component {

    componentDidMount() {
        //console.log("Shelves.js:") //No need to say this because DevTools Console already shows which file is doing the console.log
        console.log(this)
    }

    render() {
        const allBooks = this.props.allBooks;
        console.log("allBooks = ", allBooks);
        const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
        const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
        const read = allBooks.filter(book => book.shelf === "read");
        
        return(
            <div className="list-books-content">
            <div>
                <Shelf books={currentlyReading} title="Currently Reading" changeShelf={this.props.changeShelf}/>
                <Shelf books={wantToRead} title="Want to Read" changeShelf={this.props.changeShelf}/>
                <Shelf books={read} title="Read" changeShelf={this.props.changeShelf}/>
            </div>
          </div>

        )
    }
}

export default Shelves;
