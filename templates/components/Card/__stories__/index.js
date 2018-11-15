import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import Card from "..";
import RowCard from "../RowCard";

storiesOf("Components/Cards", module).add("Card", () => (
  <Card>{text("children", "Card content")}</Card>
));

storiesOf("Components/Cards", module).add("RowCard", () => (
  <RowCard>{text("children", "Card content")}</RowCard>
));
