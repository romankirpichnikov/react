import React from "react";
import Subscribe from "./Subscribe";

class App extends React.Component {
  render() {
    return (
      <div className="subscribe" style={styles.subscribeContainer}>
        <Subscribe book={this.props.book} author={this.props.author} />
      </div>
    );
  }
}

export default App;

const styles = {
  subscribeContainer: {
    display: "flex",
    maxWidth: "60%",
    margin: "0 auto",
    padding: "0 10% 0 0"
  }
};
