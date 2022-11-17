const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProduct,
  deleteProductById,
} = require("../controllers/productosController");

const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth")

//Aca se agregan metodos para verificar que este logueado
router.route("/productos").get(getProducts); //ruta para obtener todos los productos
router.route("/productos/new").post(isAuthenticatedUser,authorizeRoles("admin"),newProduct); //ruta para ingresar nuevo producto
router.route("/productos/:id").get(getProductById); //ruta para obtener un producto
router.route("/productos/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct); //ruta para actualizar un producto
router.route("/productos/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProductById); //ruta para eliminar  un producto

module.exports = router;
