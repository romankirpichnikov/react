import React from "react";

class Header extends React.Component {
  render() {
    return <header style={styles.header}> BookStore </header>;
  }
}

export default Header;

const styles = {
  header: {
    backgroundColor: "aqua",
    color: "#ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    fontWeight: "bold"
  }
};
