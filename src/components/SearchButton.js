import React from 'react'
import { Link } from 'react-router-dom';

class SearchButton extends React.Component {
    render() {
        return(
            <div className="open-search">
                {/* Replace <button with <Link */}
            {/* <button onClick={() => {this.props.updateSearchPageStateYo(true)}}>Add a book</button> */}
            <Link className="open-search" to="/search">Find a Book to Add</Link>
          </div>
        )
    }
}
export default SearchButton