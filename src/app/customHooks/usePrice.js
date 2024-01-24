export function usePrice(price) {
  const currency = price.currency === "USD" ? "U$S" : "$";
  const amount = Intl.NumberFormat("es-AR").format(price.amount).toString();
  const decimals = price.decimals.toString().padStart(2, "0");

  return { currency, amount, decimals };
}
