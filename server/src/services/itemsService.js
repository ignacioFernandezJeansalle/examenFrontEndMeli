const getAuthor = () => {
  return {
    author: { name: "Ignacio", lastname: "Fernández Jeansalle" },
  };
};

const getAmountDecimals = (price) => {
  const amount = Math.trunc(price);
  const decimals = price - amount;
  return { amount, decimals };
};

const getCategories = (dataCategoryId) => {
  const categories = [];
  dataCategoryId.path_from_root.forEach((element) => {
    categories.push(element.name);
  });
  return categories;
};

const getItems = (dataItems) => {
  const items = [];
  dataItems.forEach((element) => {
    const { id, title, currency_id: currency, price, thumbnail: picture, condition } = element;
    const free_shipping = element.shipping.free_shipping;
    const { amount, decimals } = getAmountDecimals(price);
    items.push({
      id: id,
      title: title,
      price: {
        currency: currency,
        amount: amount,
        decimals: decimals,
      },
      picture: picture,
      condition: condition,
      free_shipping: free_shipping,
    });
  });
  return items;
};

module.exports = { getAuthor, getCategories, getItems };
