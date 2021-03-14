import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import "./App.css";

class SearchBooks extends Component {
  state = {
    searchedBooks: [],
  };

  handleChnage = (value) => {
    if (value.trim() !== "") {
      this.props.hasLoad(true);
      BooksAPI.search(value).then((books) => {
        this.setState(() => ({
          searchedBooks: books.error !== undefined ? [] : books,
        }));
        this.props.hasLoad(false);
      });
    } else {
      this.setState(() => ({
        searchedBooks: [],
      }));
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => {
                this.handleChnage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks
              .filter((book) => !this.props.booIds.includes(book.id))
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} updateBook={this.props.updateBook} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
