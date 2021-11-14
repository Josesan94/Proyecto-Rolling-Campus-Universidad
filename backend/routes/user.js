var express = require('express');
var userController = require('../controllers/user');
//var ensureAuth = require('../middlewares/authentication');

var api = express.Router();


api.post('/user', userController.addUser);
api.get('/user/:id', userController.getUser);
api.delete('/user/:id', userController.delUser);
api.put('/user/:id', userController.updUser);
// api.put('/user-role/:id', ensureAuth, userController.updUserRole);

// User login
api.post('/login', userController.login);
//No lleva ensureAuth porque si debo dejar que el usuario pueda loguear

api.get('/users', ensureAuth, userController.getUsers);
// api.delete('/users/:prop/:value')

module.exports = api;
