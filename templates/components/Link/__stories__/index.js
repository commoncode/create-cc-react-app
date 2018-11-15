import { MemoryRouter } from "react-router-dom";
import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { Link, ExternalLink } from "..";

storiesOf("Components", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Link", () => (
    <Link to={text("to", "path/to/internal/link")}>Internal link</Link>
  ));

storiesOf("Components", module).add("ExternalLink", () => (
  <ExternalLink href={text("href", "//google.com")} target="_blank">
    External link
  </ExternalLink>
));
