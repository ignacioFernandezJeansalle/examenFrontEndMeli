const itemsService = require("../services/itemsService");

/*****************/
/* Item by query */
/*****************/
const getItemsByQuery = async (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit;

  const path =
    limit && limit > 0
      ? `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`
      : `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

  //------------------------------------------
  // Consulta a la API de MercadoLibre x QUERY
  //------------------------------------------
  const resQuery = await fetch(path);
  const dataQuery = await resQuery.json();

  //-------------------------------------
  // Inicio respuesta con firma del autor
  //-------------------------------------
  const author = itemsService.getAuthor();

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

  res.json({ ...author, categories: categories, items: dataItems });
};

/**************/
/* Item by id */
/**************/
const getItemById = async (req, res) => {
  const queryById = req.params.id;
  const PATH = `https://api.mercadolibre.com/items/${queryById}`;

  //---------------------------------------
  // Consulta a la API de MercadoLibre x Id
  //---------------------------------------
  const resQueryById = await fetch(PATH);
  const dataQueryById = await resQueryById.json();

  //-----------------------------------------------------
  // Consulta a la API de MercadoLibre x Descricpión x Id
  //-----------------------------------------------------
  const resQueryDescById = await fetch(`${PATH}/description`);
  const dataQueryDescById = await resQueryDescById.json();

  //-------------------------------------
  // Inicio respuesta con firma del autor
  //-------------------------------------
  const author = itemsService.getAuthor();

  //------------------------------
  // Obtengo los detalles del item
  //------------------------------
  const dataItem = itemsService.getItem(dataQueryById, dataQueryDescById);

  //----------------------------------------------
  // Consulta a la API de MercadoLibre x Categoría
  //----------------------------------------------
  const { category_id } = dataQueryById;
  const resCategoryId = await fetch(`https://api.mercadolibre.com/categories/${category_id}`);
  const dataCategoryId = await resCategoryId.json();

  // Recorro la ruta de categorías y armo un array de categorías
  const categories = itemsService.getCategories(dataCategoryId);

  res.json({ ...author, categories: categories, item: dataItem });
};

module.exports = {
  getItemsByQuery,
  getItemById,
};
