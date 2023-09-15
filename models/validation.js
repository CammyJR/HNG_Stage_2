const {body} = require('express-validator')
exports.validationSchema =[
    body('id')
        .not()
        .isEmpty()
        .withMessage('id is required! enter an id')
        .isInt()
        .withMessage('enter a whole number!'),
    body('name')
        .not()
        .isEmpty()
        .withMessage('name is required')
        .isString()
        .withMessage('name must be a string')
        .isLength({min:2, max: 50})
        .withMessage('name must be between 2 and 50 characters')
]
