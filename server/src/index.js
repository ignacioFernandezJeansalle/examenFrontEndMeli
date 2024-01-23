const express = require("express");
const cors = require("cors");

const app = express();
const itemsRouter = require("./routes/itemsRoutes");
const PORT = 3001;

app.use(cors());

app.use("/api/items", itemsRouter);

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando al puerto ${PORT}`);
});
