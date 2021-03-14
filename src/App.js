import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import MyBooks from "./MyBooks";
import Mask from "./Mask";

class BooksApp extends Component {
  state = {
    books: [],
    showMask: false,
  };

  getAllBooks = () => {
    this.hasLoad(true);
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      this.hasLoad(false);
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  updateBook = (book, shelf) => {
    this.hasLoad(true);
    console.log(`shelf: ${shelf}`);
    BooksAPI.update(book, shelf).then(
      setTimeout(() => {
        this.getAllBooks();
      }, 1000)
    );
  };

  hasLoad = (isLoading) => {
    console.log(`Loading: ${isLoading}`);
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    this.setState(() => ({ showMask: isLoading }));
  };

  render() {
    const booIds = this.state.books.map((book) => book.id);
    return (
      <div className="app">
        <Mask showMask={this.state.showMask} />

        <Route
          path="/search"
          render={() => (
            <SearchBooks
              hasLoad={this.hasLoad}
              booIds={booIds}
              updateBook={this.updateBook}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MyBooks books={this.state.books} updateBook={this.updateBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
