import { render } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com",
    },
  ];
  expect(render(<CardList robot={mockRobots} />)).toMatchSnapshot();
});
