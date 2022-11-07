const express = require("express");
const { registroUsuario, loginUser, logOut } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/usuario/registro").post(registroUsuario);
router.route("/login").get(loginUser);
router.route("/logout").get(isAuthenticatedUser, logOut);

module.exports = router;
