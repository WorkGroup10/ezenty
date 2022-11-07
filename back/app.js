const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser")

//Uso de constantes Importadas
app.use(express.json());
app.use(cookieParser());

//Importar rutas

const productos = require("./routes/productosRoutes");
const usuarios = require("./routes/authRoutes");


app.use("/api", productos);
app.use("/api", usuarios);

//MiddleWares para manejar errores
app.use(errorMiddleware);
module.exports = app;
