import React from "react";
import { PropTypes } from "prop-types";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import IconTextButton from "./IconTextButton";

const HideShowButton = ({ isOpen, onToggle, text }) => (
  <IconTextButton onClick={onToggle} icon={isOpen ? faMinus : faPlus}>
    {`${isOpen ? "Hide" : "Show"}${text ? ` ${text}` : ""}`}
  </IconTextButton>
);

HideShowButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default HideShowButton;
