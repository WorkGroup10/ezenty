const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Importar rutas

const productos = require("./routes/productosRoutes");
const usuarios = require("./routes/auth");

app.use("/api", productos);
app.use("/api", usuarios);

//MiddleWares para manejar errores
app.use(errorMiddleware);
module.exports = app;
