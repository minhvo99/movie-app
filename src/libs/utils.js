export const currencyFormat = (value, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
  return formatter.format(value);
};
