const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ mensaje: "Hola mundo!!!" });
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando al puerto ${PORT}`);
});
