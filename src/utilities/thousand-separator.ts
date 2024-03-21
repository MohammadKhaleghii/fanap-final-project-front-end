const thousandSeparator = (number: number) => {
  return number.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
};

export default thousandSeparator;
