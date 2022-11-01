const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProduct,
  deleteProductById,
} = require("../controllers/productosController");

router.route("/productos").get(getProducts); //ruta para obtener todos los productos
router.route("/productos/new").post(newProduct); //ruta para ingresar nuevo producto
router.route("/productos/:id").get(getProductById); //ruta para obtener un producto
router.route("/productos/:id").put(updateProduct); //ruta para actualizar un producto
router.route("/productos/:id").delete(deleteProductById); //ruta para eliminar  un producto

module.exports = router;
