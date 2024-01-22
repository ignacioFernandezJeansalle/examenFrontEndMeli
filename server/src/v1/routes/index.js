const express = require("express");
const router = express.Router();

//  /items?q=:query
//  http://localhost:3000/api/items?q=QUERY
router.route("/items").get((req, res) => {
  res.send(`<h1>Respuesta a query /api/items?q=${req.query.q}</h1>`);
});

//  /items/:id
//  http://localhost:3000/api/items/ID
router.route("/items/:id").get((req, res) => {
  res.send(`<h1>Respuesta a query /api/items/${req.params.id}</h1>`);
});

module.exports = router;
