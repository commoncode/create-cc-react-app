import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";

import ErrorMessage from "..";

storiesOf("Components", module).add("ErrorMessage", () => (
  <ErrorMessage visible={boolean("visible", true)}>
    {text("children", "Username or password are incorrect")}
  </ErrorMessage>
));
