import styled from "styled-components";

const OutlineButton = styled.button`
  ${({ color, theme, size, disabled }) => {
    const selectedColor =
      color && theme.colors[color] ? theme.colors[color] : theme.colors.success;
    return `
      cursor: pointer;
      min-height: 2rem;
      background-color: transparent;
      font-weight: ${theme.fontWeights.bold};
      font-size: ${size || theme.fontSizes.beta}px;
      opacity: ${disabled ? 0.25 : 1};
      text-decoration: none;
    
      &:focus {
        outline: none;
      }
    
      border: 0.5px solid ${selectedColor};
      color: ${selectedColor};

      ${!disabled &&
        `&:hover {
          background-color: ${selectedColor};
          color: white;
        }`}
    `;
  }};
`;

export default OutlineButton;
