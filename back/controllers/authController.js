const User = require("../models/authModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
  const { nombre, email, password } = req.body;

  const user = await User.create({
    nombre,
    email,
    password,
    avatar: {
      public_id: "ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
      url: "./Images/avatar.png",
    },
  });

  tokenEnviado(user, 201, res);
});

//Iniciar Sesion - Login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //revisar si los campos estan completos
  if (!email || !password) {
    return next(new ErrorHandler("Por favor ingrese email & Contraseña", 400));
  }

  //Buscar al usuario en nuestra base de datos
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Email o contraseña invalidos", 401));
  }

  //Comparar contraseñas, verificar si está bien
  const contrasenaOK = await user.compararPass(password);

  if (!contrasenaOK) {
    return next(new ErrorHandler("Contraseña invalida", 401));
  }

  tokenEnviado(user, 200, res);
});

//Cerrar Sesion (logout)
exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Cerró sesión",
  });
});
