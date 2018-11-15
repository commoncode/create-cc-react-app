import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs/react";

import { colors } from "constants/theme";
import Button, { HideShowButton, OutlineButton, WideButton } from "..";

class HideShowButtonWithState extends React.Component {
  state = { isOpen: true };

  render = () => {
    const { isOpen } = this.state;
    return (
      <HideShowButton
        isOpen={isOpen}
        onToggle={() => this.setState(state => ({ isOpen: !state.isOpen }))}
      />
    );
  };
}

storiesOf("Components/Button", module)
  .add("Button", () => (
    <Button disabled={boolean("disabled", false)}>
      {text("children", "Sign in")}
    </Button>
  ))
  .add("OutlineButton", () => {
    const types = { ...colors };
    for (const key in types) {
      types[key] = key;
    }
    return (
      <OutlineButton
        color={select("Color", types, types.success)}
        disabled={boolean("disabled", false)}
      >
        {text("children", "Sign in")}
      </OutlineButton>
    );
  })
  .add("WideButton", () => (
    <WideButton>{text("children", "Sign in")}</WideButton>
  ))
  .add("HideShowButton", () => <HideShowButtonWithState />);
