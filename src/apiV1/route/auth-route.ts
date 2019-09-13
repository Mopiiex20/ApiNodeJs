import { Router } from 'express';
import Controller from '../controllers/auth-сontroller';

const user: Router = Router();
const controller = new Controller();

// Sign In
user.post('/auth', controller.authenticate);

// Register New User
user.post('/register', controller.register);


export default user;
