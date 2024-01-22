const express = require("express");
const v1Router = require("./v1/routes");

const app = express();
const PORT = 3000;

app.use("/api", v1Router);
/*
app.get("/", (req, res) => {
  res.status(200).send("<h1>Respuesta a /</h1>");
});
*/
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando al puerto ${PORT}`);
});
