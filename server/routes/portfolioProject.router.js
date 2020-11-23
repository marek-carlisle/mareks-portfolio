const express = require('express');
const router = express.Router();
const portfolioItems = require('../src/components/Portfolio/portfolioItems');

router.get('/', (req, res) => {
    res.send(portfolioItems);
});

module.exports = router;