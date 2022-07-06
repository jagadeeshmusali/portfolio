import express = require('express');
import { sayHello } from './handlers/hello-handler';

export const router = express.Router();

router.post('/', sayHello);
