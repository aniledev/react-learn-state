import React from "react";

class Counter extends React.Component {
  constructor(props) {
    // console.log("props in constructor", props);
    super(props);
    this.state = {
      count: 0,
      step: this.props.step,
    };
  }

  static defaultProps = {
    step: 1,
  };
  // When adding an event listener function to a React class, use an arrow function to make sure that this is referring to the class instance.
  handleButtonClick = () => {
    // console.log("props in handlebutton", this.props);
    // console.log("state in handleclick", this.state);
    const newCount = this.state.count + this.state.step;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <h4>Tally Counter: Using State</h4>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add {this.state.step}</button>
      </div>
    );
  }
}

export default Counter;

// Make a number prop called step.
// The step prop can control how much we add to the count each time the button is clicked.
//  Don't forget to setup a default (static defaultProps) for the step prop with the number 1.
