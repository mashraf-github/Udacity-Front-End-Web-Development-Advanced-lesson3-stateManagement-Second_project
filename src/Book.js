import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  render() {
    const authors =
      this.props.book.authors && this.props.book.authors.length > 0
        ? `[${this.props.book.authors.join("], [")}]`
        : "";
    // debugger;
    const coverImg =
      this.props.book.imageLinks === undefined ||
      this.props.book.imageLinks.thumbnail === undefined
        ? "https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif"
        : this.props.book.imageLinks.thumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${coverImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={
                this.props.book.shelf === undefined
                  ? "none"
                  : this.props.book.shelf
              }
              onChange={(e) =>
                this.props.updateBook(this.props.book, e.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option
                value="currentlyReading"
                disabled={this.props.book.shelf === "currentlyReading"}
              >
                Currently Reading
              </option>
              <option
                value="wantToRead"
                disabled={this.props.book.shelf === "wantToRead"}
              >
                Want to Read
              </option>
              <option value="read" disabled={this.props.book.shelf === "read"}>
                Read
              </option>
              <option
                value="none"
                disabled={this.props.book.shelf === undefined}
              >
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
