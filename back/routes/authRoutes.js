const express = require("express");
const {
  registroUsuario,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
  updateUser,
  deleteUser
} = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/logup").post(registroUsuario);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logOut);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").post(resetPassword);
router.route("/userlogged").get(isAuthenticatedUser,getUserProfile);
router.route("/userlogged/updatePassword").put(isAuthenticatedUser,updatePassword);
router.route("/userlogged/updateProfile").put(isAuthenticatedUser,updateProfile);

//rutas admin
router.route('/management/allUsers').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers)
router.route('/management/userdetails/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
router.route('/management/userdetails/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
router.route("/management/userdetails/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)

module.exports = router;
