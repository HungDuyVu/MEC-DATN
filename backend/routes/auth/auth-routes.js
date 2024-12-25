const express = require('express');
const router = express.Router();
const { authMiddleware } = require("../../helpers/authMiddleware");
const {
   registerSalesStaff,
   registerWarehousesStaff,
   registerManeger,
   registerCustomer,
   loginUser,
   logoutUser
} = require("../../controllers/auth/auth-controllers");

router.post("/register-sales_staff", registerSalesStaff);
router.post("/register-warehouse_staff", registerWarehousesStaff);
router.post("/register-manager", registerManeger);
router.post("/register-customer", registerCustomer);
router.post("/login", loginUser);

router.post("/logout", authMiddleware, logoutUser);

module.exports = router;
