const express = require('express');
const { authMiddleware } = require('../../helpers/authMiddleware');
const { fetchAllSupplier, addSupplier, editSupplier, isBlockedSupplier } = require('../../controllers/manager/supplier-controller');

const router = express.Router();

// Định nghĩa các route cho supplier
router.get('/all', authMiddleware, fetchAllSupplier);
router.post('/add', authMiddleware, addSupplier);
router.put('/edit/:id', authMiddleware, editSupplier);
router.patch('/block/:id', authMiddleware, isBlockedSupplier);

module.exports = router;