const express = require('express');
const router = express.Router();
const { planController } = require('../controller');

router.post('/makePlan', planController.makePlan.post);

module.exports = router;
