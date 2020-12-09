const express = require('express');
const router = express.Router();
const portfolioProjects = require('../../src/components/Portfolio/portfolioProjects');

router.get('/', (req, res) => {
    res.send(portfolioProjects);
});

module.exports = router;