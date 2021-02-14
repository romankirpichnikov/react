import React from "react";
import Subscribe from "./Subscribe";

class Main extends React.Component {
  render() {
    return (
      <main style={styles.main}>
        <Subscribe book={this.props.book} authors={this.props.authors} />
      </main>
    );
  }
}

export default Main;

const styles = {
  main: {
    display: "flex",
    maxWidth: "60%",
    margin: "0 auto",
    padding: "0 10% 0 0"
  }
};
