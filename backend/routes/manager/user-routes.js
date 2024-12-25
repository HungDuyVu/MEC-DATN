const express = require('express');

const { authMiddleware } = require('../../helpers/authMiddleware');
const { fetchAllCustomers, fetchAllSalesStaff, fetchAllWarehousesStaff, fetchAllManager, editInformations, isBlocked } = require('../../controllers/manager/user-controllers');
const managerOnlyMiddleware = require('../../helpers/managerOnlyMiddleware');
const router = express.Router();

// Routes
router.get('/customers', authMiddleware, managerOnlyMiddleware, fetchAllCustomers);
router.get('/sales-staff', authMiddleware, managerOnlyMiddleware, fetchAllSalesStaff);
router.get('/warehouses-staff', authMiddleware, managerOnlyMiddleware, fetchAllWarehousesStaff);
router.get('/managers', authMiddleware, managerOnlyMiddleware, fetchAllManager);

router.put('/edit', authMiddleware, editInformations);
router.put('/block/:userId', authMiddleware, managerOnlyMiddleware, isBlocked);

module.exports = router;
