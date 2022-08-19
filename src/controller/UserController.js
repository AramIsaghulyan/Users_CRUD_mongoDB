//Standard requires
const express = require('express');
const router = express.Router();
const moongose = require('mongoose');

//Library requires
const awaitErrorHandlerFactory = require('../shared/functions').getMiddleware();
//Local requires
const userService = require('../sevice/UserSevice');
const { validate } = require('../validation/validation');
const userValitation = require('../validation/UserValidation');
const response = require('../shared/response');

router.post('/create_user', awaitErrorHandlerFactory(async (req, res) => {
    try {
        const body = await validate(req.body, userValitation.user);
        const { one, tow, name, surname, age, email, password } = body;
        const result = await userService.createUser({ one, tow, name, surname, age, email, password });
        res.status(200).json(new response(result));
    }
    catch (error) {
        res.status(400).json(new response({}, error));
    }
}));

router.get('/get_users', awaitErrorHandlerFactory(async (req, res) => {
    try {
        const result = await userService.getUsers(req.body);
        res.status(200).json(new response(result));
    }
    catch (error) {
        res.status(400).json(new response({}, error));
    }
}));

router.get('/get_user_by_email/:email', awaitErrorHandlerFactory(async (req, res) => {
    try {
        const result = await userService.getUserByEmail(req.params.email);
        res.status(200).json(new response(result));
    }
    catch (error) {
        res.status(400).json(new response({}, error));
    }
}));

router.put('/update_user_by_email/:email', awaitErrorHandlerFactory(async (req, res) => {
    try {
        const body = await validate(req.body, userValitation.user);
        const result = await userService.updateUserByEmail(req.params.email, body);
        res.status(200).json(new response(result));
    }
    catch (error) {
        res.status(400).json(new response({}, error));
    }
}));

router.delete('/delete_user_by_email/:email', awaitErrorHandlerFactory(async (req, res) => {
    try {
        const result = await userService.deleteUser(req.params.email);
        res.status(200).json(new response(result));
    }
    catch (error) {
        res.status(400).json(new response({}, error));
    }
}));

module.exports = router;