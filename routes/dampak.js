const express = require('express');
const router = express.Router();

const {createDampak, updateDampak, deleteDampak, getSingleDampak, getAllDampaks} = require('../controllers/dampakController');

router.route('/').post(createDampak);

router.route('/:id').put(updateDampak);
router.route('/:id').delete(deleteDampak);
router.route('/:id').get(getSingleDampak);
router.route('/').get(getAllDampaks);

module.exports = router