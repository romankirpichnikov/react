import React from "react";
import AuthorCard from "./AuthorCard";

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.toggleShowAuthors = this.toggleShowAuthors.bind(this);
    this.state = {
      isShowAllAuthors: false,
      authorLimit: 3
    };
  }

  toggleShowAuthors() {
    this.setState( state => ({
      isShowAllAuthors: !state.isShowAllAuthors
    }));
  }

  render() {
    const numToDisplay = this.state.isShowAllAuthors ? this.props.authors.length : this.state.authorLimit

    return (
      <>
        {
          this.props.authors.slice(0, numToDisplay).map((author) => {
            return <AuthorCard author={author} key={author.Id} />
          })
        }
      {
        this.props.authors.length > this.state.authorLimit && (
          <button onClick={this.toggleShowAuthors}>Show all authors</button>
        )
      }
      </>
    );
  }
}

export default Authors;
