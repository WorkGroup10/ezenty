const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto= require("crypto")

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

//Encriptar Contraseña
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Desencriptar contraseña

usuarioSchema.methods.compararPass = async function (passDada){
  return await bcrypt.compare(passDada, this.password)
}

// retornar un JWTOKEN
usuarioSchema.methods.getJwtToken = function () {
  return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME
  })
}

//Generar un token para reset de contraseña
usuarioSchema.methods.genResetPasswordToken = function () {
  const resetToken= crypto.randomBytes(20).toString('hex')

  //Hashear y setear resetToken
  this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest('hex')

  //Setear fecha de expiracion del token
  this.resetPasswordExpire= Date.now() + 60*60*1000 //el token dura 60 min

  return resetToken
}


//Exportar Modulo
module.exports = mongoose.model("auth", usuarioSchema);
