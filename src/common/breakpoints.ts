const sizes = {
  xs: "350px",
  sm: "900px",
  lg: "1200px",
};

const devices = {
  smartphone: `(max-width: ${sizes.xs})`,
  tablet: `(max-width: ${sizes.sm})`,
  desktop: `(max-width: ${sizes.lg})`,
};

export default devices;
