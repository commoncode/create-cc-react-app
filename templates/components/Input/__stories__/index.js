import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";

import Input from "..";

storiesOf("Components", module).add("Input", () => (
  <Input
    isInvalid={boolean("isInvalid", false)}
    placeholder={text("placeholder", "placeholder text")}
  />
));
