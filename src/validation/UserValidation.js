//Local requires
const Joi = require('../validation/validation').EVMJoi;

module.exports = {
    user: {
        one: Joi.string().required(),
        tow: Joi.string().required(),
        name: Joi.string().required(),
        surname: Joi.string().required(),
        age: Joi.user().Age().required(),
        email: Joi.user().Email().required(),
        password: Joi.user().Password().required()
    }
};