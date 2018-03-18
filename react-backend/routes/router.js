var express = require('express');
var path = require('path');
var router = express.Router();
var api_calc = require('../api/api_calc');

router.get('/api_get_add_result', api_calc.getAdd);
router.get('/api_get_sub_result', api_calc.getSub);
router.get('/api_get_mul_result', api_calc.getMul);
router.get('/api_get_div_result', api_calc.getDiv);

module.exports = router;
