const express = require('express');
const router = express.Router();

router.all('/index', function (req, res) {
    res.json({});
});

router.all('/list', function (req, res) {
    res.json({});
});

module.exports = router;