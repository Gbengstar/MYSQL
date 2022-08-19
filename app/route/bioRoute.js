const { Router } = require('express');
const { create_bio } = require('../controller/bioCreate');

const router = Router();

router.route('/').post(create_bio);

exports.BioRouter = router;
