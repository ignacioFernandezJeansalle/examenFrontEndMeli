const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

//  /items?q=:query
//  http://localhost:3000/api/items?q=QUERY
router.get("", itemsController.getItemsByQuery);

//  /items/:id
//  http://localhost:3000/api/items/ID
/*router.route("/:id").get((req, res) => {
  res.send(`<h1>Respuesta a query /api/items/${req.params.id}</h1>`);
});*/
router.get("/:id", (req, res) => {
  res.send(`<h1>Respuesta a query /api/items/${req.params.id}</h1>`);
});

module.exports = router;
