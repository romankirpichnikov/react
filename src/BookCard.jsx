import React from "react";

class BookCard extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Empty books card</div>;
    }

    const {
      book: { Title, Price, Description, Cover, SubscribeInfo }
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title} />
        </div>
        <div style={styles.cardBody}>
          <div>{Title}</div>
          <div>{Price}</div>
          <div>{Description}</div>
          <div>
            <span style={styles.span}>MinPrice: </span>
            {SubscribeInfo.MinPrice}
          </div>
          <div>
            <span style={styles.span}>DesiredPrice: </span>
            {SubscribeInfo.DesiredPrice}
          </div>
          <div>
            <span style={styles.span}>CollectedAmount: </span>
            {SubscribeInfo.CollectedAmount} %<progress value={SubscribeInfo.CollectedAmount} max="100" />
          </div>
          <div>
            <span style={styles.span}>ExpectedAmount: </span>
            {SubscribeInfo.ExpectedAmount}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;

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
  },
  span: {
    fontWeight: "bold"
  }
};
