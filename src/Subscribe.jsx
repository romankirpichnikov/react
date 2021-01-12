import React from "react";
import AuthorCard from "./AuthorCard";
import BookCard from "./BookCard";

class Subscribe extends React.Component {
  render() {
    return (
      <div style={styles.subscribeContainer}>
        <div className="AuthorCard">
          <AuthorCard author={this.props.author} />
        </div>
        <div className="book" style={styles.book}>
          <BookCard book={this.props.book} />;
        </div>
      </div>
    );
  }
}

export default Subscribe;

const styles = {
  subscribeContainer: {
    display: "flex",
    margin: "0 auto",
    padding: "0 10% 0 0"
  },
  book: {
    padding: "0 0 0 5%"
  }
};
