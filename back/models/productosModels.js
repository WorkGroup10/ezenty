const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Por favor ingrese el nombre del producto"],
    trim: true,
    maxLength: [
      120,
      "El nombre del producto excede el limite maximo de caracteres.",
    ],
    default: "Nuevo Producto",
  },
  descripcion: {
    type: String,
    required: [true, "Por favor ingrese la descripcion del producto"],
    trim: true,
    maxLength: [
      1000,
      "El descripcion del producto excede el limite maximo de caracteres.",
    ],
    default: "Descripcion Nuevo Prodcuto",
  },
  precio: {
    type: Number,
    required: [true, "Por favor ingrese la precio del producto"],
    maxLength: [7, "El precio del producto excede el limite maximo."],
    default: 0.0,
  },
  stock: {
    type: Number,
    required: [true, "Por favor ingrese el stock del producto"],
    maxLength: [3, "El stock del producto excede el limite maximo."],
    default: 0,
  },
  imagen: {
    type: String,
    required: [true, "Por favor ingrese la imagen del producto"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  } 
});

module.exports = mongoose.model("productos", productosSchema);
