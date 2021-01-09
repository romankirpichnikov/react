import React from "react";
import BookCard from "./BookCard";

class BookCards extends React.Component {
  render() {
    if (!this.props.books) {
      return <div>Empty books collection</div>;
    }

    return (
      <div className="book">
        {this.props.books.map(book => {
          return <BookCard book={book} key={book.Id} />;
        })}
      </div>
    );
  }
}

export default BookCards;
