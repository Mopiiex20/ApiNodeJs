import { Router } from 'express';
import verifyToken from '@helpers/verify-token';
import Controller from '../controllers/user-сontroller';

const user: Router = Router();
const controller = new Controller();

// Retrieve all Users
user.get('/' ,controller.findAll);


// Retrieve a Specific User
user.get('/:id', verifyToken, controller.findOne);

// Update a User with Id
user.put('/:id', controller.update);

// Delete a User with Id
user.delete('/:id', controller.remove);

export default user;
