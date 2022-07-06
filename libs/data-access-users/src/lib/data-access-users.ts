import express = require('express');
import { getUsers, getUsersByName } from './handlers/users-handler';

export const router = express.Router();

router.get('/', getUsers);
router.get('/:name', getUsersByName);
