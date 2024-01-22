const itemsService = require("../services/itemsService");

const getItemsByQuery = async (req, res) => {
  //------------------------------------------
  // Consulta a la API de MercadoLibre x QUERY
  //------------------------------------------
  const query = req.query.q;
  const resQuery = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
  const dataQuery = await resQuery.json();

  //-------------------------------------
  // Inicio respuesta con firma del autor
  //-------------------------------------
  const response = itemsService.getAuthor();

  //-------------------------------------------------------------------
  // Consulta a la API de MercadoLibre x Categoría del primer resultado
  //-------------------------------------------------------------------
  const categoryId = dataQuery.results[0].category_id;
  const resCategoryId = await fetch(`https://api.mercadolibre.com/categories/${categoryId}`);
  const dataCategoryId = await resCategoryId.json();

  // Recorro la ruta de categorías y armo un array de categorías
  const categories = itemsService.getCategories(dataCategoryId);

  //----------------------------------
  // Obtengo los detalles de cada item
  //----------------------------------
  const dataItems = itemsService.getItems(dataQuery.results);

  res.json({ ...response, categories: categories, items: dataItems, ...dataQuery });
  //res.json({ items: dataItems });
};

const getItemById = (req, res) => {
  res.send(`<h1>Respuesta a query /api/items/${req.params.id}</h1>`);
};

module.exports = {
  getItemsByQuery,
  getItemById,
};
