import React from "react";

// think of classes like a blueprint
class TheDate extends React.Component {
  constructor(props) {
    super(props);
    // initial state is usually set as an object; think of state as the STORE data in earlier projects
    this.state = {
      datetime: new Date(),
    };
  }
  render() {
    console.log(this.state);
    // toLocaleString() displays the date in a human-readable format
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;
