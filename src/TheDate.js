import React from "react";

// think of classes like a blueprint
class TheDate extends React.Component {
  constructor(props) {
    super(props);
    // initial state is usually set as an object; think of state as the STORE data in earlier projects
    this.state = {
      datetime: new Date(),
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      console.log("setInterval");
      this.setState({
        datetime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log("render");
    // toLocaleString() displays the date in a human-readable format
    return (
      <div>
        <h4>Display the Date Using State</h4>
        {this.state.datetime.toLocaleString()}
      </div>
    );
  }
}

export default TheDate;
