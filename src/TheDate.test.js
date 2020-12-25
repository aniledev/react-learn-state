import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TheDate from "./TheDate";

describe("TheDate Component", () => {
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip("should render the UI as expected", () => {
    expect(renderer.create(<TheDate />).toJson()).toMatchSnapshot();
  });
});
