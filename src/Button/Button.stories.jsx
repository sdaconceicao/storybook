import React, { useState } from "react";
import Button, { SECONDARY, TERTIARY } from "./Button";
import { Title, Primary, ArgsTable, Stories } from "@storybook/addon-docs";
import theme from "../theme";
import { ThemeProvider } from "react-jss";
import "../theme";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const BasicUsage = (args) => <Button {...args}>Lorem</Button>;
export const Secondary = () => <Button variant={SECONDARY}>Ipsum</Button>;
export const Tertiary = (args) => (
  <Button variant={TERTIARY} {...args}>
    Dolor
  </Button>
);

Tertiary.parameters = {
  docs: {
    page: (args) => (
      <ThemeProvider theme={theme}>
        <Title>Custom Doc Page</Title>
        <p>This is a tertiary button</p>
        <Tertiary {...args}>Lorem</Tertiary>
        <ArgsTable />
      </ThemeProvider>
    ),
  },
};

export const OnClickIncrement = (args) => {
  const [clicked, setClicked] = useState(0);
  const handleOnClick = (e) => {
    setClicked(clicked + 1);
    args.onClick?.(e);
  };
  return (
    <>
      <Button onClick={handleOnClick}>Click Me</Button>
      <span>Clicked {clicked} times</span>
    </>
  );
};
