const User = require("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");

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

  res.status(201).json({
    success: true,
    user,
  });
});
