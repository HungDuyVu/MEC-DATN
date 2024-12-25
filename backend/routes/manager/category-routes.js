const express = require('express');
const { authMiddleware } = require('../../helpers/authMiddleware');
const { fetchAllCategory, addCategory, editCategory, isBlockedCategory } = require('../../controllers/manager/category-controller');
const router = express.Router();


// Lấy tất cả danh mục (yêu cầu xác thực)
router.get('/all', authMiddleware, fetchAllCategory);

// Thêm danh mục mới (yêu cầu xác thực)
router.post('/add', authMiddleware, addCategory);

// Chỉnh sửa danh mục (yêu cầu xác thực)
router.put('/edit/:id', authMiddleware, editCategory);

// Chặn hoặc bỏ chặn danh mục (yêu cầu xác thực)
router.patch('/block/:id', authMiddleware, isBlockedCategory);

module.exports = router;
