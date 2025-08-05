const {getAll}  = require('../Controllers/utility');
const router = require('express').Router();

router.get("/description", getAll);

module.exports = router;