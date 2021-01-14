import React from "react";

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author) {
      return <div>Empty author profile</div>;
    }

    const {
      author: { Name, EMail, Bio, Avatar }
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Avatar} alt={Name} />
        </div>
        <div style={styles.cardBody}>
          <div>
            <span style={styles.span}>Name: </span>
            {Name}
          </div>
          <div>
            <span style={styles.span}>EMail: </span>
            {EMail}
          </div>
          <div>
            <span style={styles.span}>Bio: </span>
            {Bio}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: "flex"
  },
  imageBox: {
    maxWidth: "200px"
  },
  image: {
    width: "100%"
  },
  cardBody: {
    flex: "1"
  }
};
