import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  // When adding an event listener function to a React class, use an arrow function to make sure that this is referring to the class instance.
  handleButtonClick = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
