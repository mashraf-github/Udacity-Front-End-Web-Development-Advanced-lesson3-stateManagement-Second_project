import React, { Component } from "react";

import { Link } from "react-router-dom";

import BooksShelf from "./BookShelf";

import "./App.css";

class MyBooks extends Component {
  render() {
    const currentlyReadingBooks = this.props.books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = this.props.books.filter(
      (book) => book.shelf === "wantToRead"
    );
    const readBooks = this.props.books.filter((book) => book.shelf === "read");
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksShelf
              name="Currently Reading"
              books={currentlyReadingBooks}
              updateBook={this.props.updateBook}
            />
            <BooksShelf
              name="Want to Read"
              books={wantToReadBooks}
              updateBook={this.props.updateBook}
            />
            <BooksShelf
              name="Read"
              books={readBooks}
              updateBook={this.props.updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyBooks;
