const express=require("express");
const router=express.Router();
const { newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/ordenes/new").post(isAuthenticatedUser, newOrder)
router.route("/ordenes/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/ordenes/loggedUser/:id").get(isAuthenticatedUser, myOrders)


//rutas de admin


router.route("/management/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("/management/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route("/management/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)


module.exports=router;