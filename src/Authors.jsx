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
    return (
      <>
        {
          this.props.authors.map((author, indx) => {
            if ((indx < this.state.authorLimit) && this.state.isShowAllAuthors === false) {
              return <AuthorCard author={author} key={author.Id} />
            } else if (this.state.isShowAllAuthors === true) {
              return <AuthorCard author={author} key={author.Id} />
            }
          })
        }
        {(()=>{
          if (this.props.authors.length > this.state.authorLimit) {
            return <button onClick={this.toggleShowAuthors}>Show all authors</button>
          }
        })()
        }
      </>
    );
  }
}

export default Authors;
