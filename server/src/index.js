const express = require("express");
const itemsRouter = require("./routes/itemsRoutes");

const app = express();
const PORT = 3000;

app.use("/api/items", itemsRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando al puerto ${PORT}`);
});
