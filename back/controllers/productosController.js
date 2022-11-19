const catchAsyncErrors = require("../utils/catchAsyncErrors");
const producto = require("../models/productosModels");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const nuevoproducto = await producto.create(req.body);
  res.status(201).json({
    success: true,
    nuevoproducto,
  });
});

//Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const productsCount = await producto.countDocuments();

  const apiFeatures = new APIFeatures(producto.find(), req.query)
    .searchName()
    .filter();

  let productos = await apiFeatures.query;
  let filteredProductsCount = productos.length;
  apiFeatures.pagination(resPerPage);
  productos = await apiFeatures.query.clone();

  if (!productos) {
    return next(new ErrorHandler("No se encontro ningun producto", 404));
  }
  res.status(200).json({
    success: true,
    productsCount,
    resPerPage,
    filteredProductsCount,
    productos,
  });
});

//Ver producto por id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404));
  }

  res.status(200).json({
    success: true,
    message: "El producto buscado existe y se muestra a continuacion",
    product,
  });
});

//Actualizar producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await producto.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404));
  }
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "El producto actualizado correctamente",
    product,
  });
});

//Eliminar producto
exports.deleteProductById = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "El producto se ha eliminado correctamente",
  });
});

//fetch

//Ver todos los productos
function verProductos() {
  fetch("http://localhost:4000/api/productos")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

//verProductos();

function verProductoByID(id) {
  fetch("http://localhost:4000/api/productos/" + id)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

//verProductoByID('6358851c7286b0e83bec20b9');
