import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Clickable from "components/Button/Clickable";

const ButtonWrapper = styled(Clickable)`
  margin: 12px;
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => theme.colors[color]};
  &:hover {
    opacity: 0.66;
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const IconTextButton = ({ children, icon, color, style, onClick }) => (
  <ButtonWrapper onClick={onClick} color={color} style={style} type="button">
    <ButtonIcon icon={icon} />
    <span style={{ fontSize: 12 }}>{children}</span>
  </ButtonWrapper>
);

IconTextButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

IconTextButton.defaultProps = {
  color: "primary",
};

export default IconTextButton;
