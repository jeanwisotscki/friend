const sizes = {
  xs: "320px",
  sm: "768px",
  lg: "1023px",
};

const devices = {
  smartphone: `(max-width: ${sizes.xs})`,
  tablet: `(max-width: ${sizes.sm})`,
  desktop: `(max-width: ${sizes.lg})`,
};

export default devices;
