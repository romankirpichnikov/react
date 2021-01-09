import React from "react";
import AuthorCard from "./AuthorCard";
import BookCards from "./BookCards";

class Subscribe extends React.Component {
  render() {
    return (
      <div style={styles.subscribeContainer}>
        <div className="AuthorCard">
          <AuthorCard author={this.props.author} />
        </div>
        <div className="books" style={styles.books}>
          <BookCards books={this.props.books} />
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
  books: {
    padding: "0 0 0 5%"
  }
};
