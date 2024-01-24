//-----------------------------------
// Función para firmar las respuestas
//-----------------------------------
const getAuthor = () => {
  return {
    author: { name: "Ignacio", lastname: "Fernández Jeansalle" },
  };
};

//-----------------------------------------------------------------------------
// Función para separar el valor entero y los decimales conforme especificación
//-----------------------------------------------------------------------------
const getAmountDecimals = (price) => {
  const amount = Math.trunc(price);
  const decimals = Math.trunc((price - amount) * 100);
  return { amount, decimals };
};

//---------------------------------------------------------------------------------------------
// Función que recibe una categoría y devuelve vector con la ruta de filtros para el breadcrumb
//---------------------------------------------------------------------------------------------
const getCategories = (dataCategoryId) => {
  const categories = [];
  dataCategoryId.path_from_root.forEach((element) => {
    categories.push(element.name);
  });
  return categories;
};

//-----------------------------------------------------------
// Función que arma el array de items conforme especificación
//-----------------------------------------------------------
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

//--------------------------------------------------------
// Función que arma el objeto item conforme especificación
//--------------------------------------------------------
const getItem = (dataItem, dataItemDesc) => {
  const { id, title, currency_id: currency, price, condition } = dataItem;
  const picture = dataItem.pictures[0].url;
  const free_shipping = dataItem.shipping.free_shipping;

  const { amount, decimals } = getAmountDecimals(price);

  const description = dataItemDesc.plain_text;
  return {
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
    description: description,
  };
};

//-------------------------
// Exportación de funciones
//-------------------------
module.exports = { getAuthor, getCategories, getItems, getItem };
