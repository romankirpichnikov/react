import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main book={this.props.book} authors={this.props.authors} />
        <Footer />
      </>
    );
  }
}

export default App;
