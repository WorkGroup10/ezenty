const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Ingrese su nombre"],
    maxlength: [100, "No puede exceder los 100 caracteres "],
  },
  email: {
    type: String,
    required: [true, "Ingrese su email"],
    unique: true,
    validate: [validator.isEmail, "email incorrecto, por favor verifique"],
  },
  password: {
    type: String,
    required: [true, "Ingrese una contraseña, minimo 8 caracteres"],
    minlength: [8, "Su contraseña no cumple con el minimo de caracteres"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("auth", usuarioSchema);
