export const breakpoints = [512, 768, 1024, 1280];

export const space = [0, 6, 12, 24, 36, 48, 60, 72];

export const fontSizes = {
  alpha: 12,
  beta: 14,
  gamma: 18,
  delta: 20,
  epsilon: 24,
  zeta: 32,
  eta: 48,
  theta: 64,
  iota: 72,
  kappa: 96,
};

export const fontWeights = {
  thin: 100,
  normal: 400,
  medium: 500,
  bold: 700,
};

const lightCoral = "#F48080";
const burntSienna = "#E27E51";
const puertoRico = "#40C1AC";
const cornflowerBlue = "#52A6F8";
const steelBlue = "#427DB3";
const selectiveYellow = "#FFB700";
const black = "#000";
const white = "#FFF";
const gray40 = "#666";
const gray44 = "#717171";
const gray78 = "#C8C8C8";
const gray85 = "#D9D9D9";
const gray95 = "#F2F2F2";

export const colors = {
  white,
  gray95,
  gray85,
  gray78,
  gray40,
  gray44,
  black,
  lightCoral,
  // primary: puertoRico,
  primary: steelBlue,
  ready: cornflowerBlue,
  ongoing: gray78,
  success: puertoRico,
  warning: selectiveYellow,
  error: burntSienna,
  inputError: lightCoral,
};

export const radii = [0, 2, 3, 4];

export const fonts = {
  0: "Roboto, system-ui, sans-serif",
  sans: "system-ui, sans-serif",
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
};

export const shadows = [
  "none",
  `0 1px 4px 0 ${colors.gray78}`,
  `0 1px 3px 0 rgba(200,200,200,0.59)`,
];

export default {
  breakpoints,
  space,
  fontSizes,
  fontWeights,
  fonts,
  colors,
  radii,
  shadows,
};
