const sizes = {
  xs: "599.99px",
  sm: "600px",
  md: "768px",
  lg: "992px",
  xlg: "1200px",
};

const devices = {
  xtSmall: `(max-width: ${sizes.xs})`,
  small: `(min-width: ${sizes.sm})`,
  medium: `(min-width: ${sizes.md})`,
  large: `(min-width: ${sizes.lg})`,
  xtLarge: `(min-width: ${sizes.xlg})`,
};

export default devices;
