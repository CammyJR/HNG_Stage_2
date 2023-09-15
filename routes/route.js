const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const {validationSchema} = require('../models/validation');


router
    .post('/',validationSchema[1], controller.addUser)
    .get('/', validationSchema[0], controller.getUser)
    .put('/user_id', validationSchema, controller.updateUser)
    .delete('/user_id', validationSchema[0], controller.deleteUser);

module.exports = router;