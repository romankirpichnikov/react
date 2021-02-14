import React from "react";
import BookCard from "./BookCard";
import Authors from "./Authors";

class Subscribe extends React.Component {
  render() {
    return (
      <div style={styles.subscribeContainer}>
        <Authors authors={this.props.authors} />
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
