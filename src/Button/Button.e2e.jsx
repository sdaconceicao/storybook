import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "./Button.stories";

const { BasicUsage } = composeStories(stories);

it("Should render a basic button", () => {
  mount(<BasicUsage />);
  cy.get("button").contains("Lorem");
});
