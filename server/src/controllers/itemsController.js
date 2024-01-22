const getItemsByQuery = (req, res) => {
  req.query.q ? res.send(`<h1>Respuesta a query /api/items?q=${req.query.q}</h1>`) : res.send("ERROR");
};

const getItemById = (req, res) => {
  res.send(`<h1>Respuesta a query /api/items/${req.params.id}</h1>`);
};

module.exports = {
  getItemsByQuery,
  getItemById,
};
