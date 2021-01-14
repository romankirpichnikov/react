import React from "react";
import Subscribe from "./Subscribe";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main book={this.props.book} author={this.props.author}/>
        <Footer />
      </>
    );
  }
}

export default App;
