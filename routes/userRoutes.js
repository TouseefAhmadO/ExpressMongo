const express = require('express');
const UserController = require('../controllers/controlUser');

const Router = express.Router();

Router.route('/all').get(UserController.getAllUsers);
Router.route('/section').get(UserController.getFilteredUser);
Router.route('/single/:id').get(UserController.getsingleUser);
Router.route('/create').post(UserController.createNewUser);
Router.route('/update/:id').put(UserController.updateUser);
Router.route('/deleteall').delete(UserController.deleteAll);
Router.route('/delete/:id').delete(UserController.deleteSingleUser);

module.exports = Router;