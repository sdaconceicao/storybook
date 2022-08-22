import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "./Button.stories";

const { OnClickIncrement } = composeStories(stories);

it("Should update the page the number of times the button is clicked", () => {
  mount(<OnClickIncrement />);
  cy.findByRole("button", { name: /click me/i }).click();
  cy.findByText("Clicked 1 times");
  cy.findByRole("button", { name: /click me/i }).click();
  cy.findByText("Clicked 2 times");
});
