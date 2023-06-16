const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history-controllers');

// Mendapatkan semua history baca buku beserta data buku yang terkait
router.get('/histories', historyController.getAllHistories);

// Membuat atau memperbarui history
router.post('/histories', historyController.updateHistory);

module.exports = router;
