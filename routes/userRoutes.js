const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user and returns a JWT token if successful.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Brandon
 *                 description: The user's name.
 *               email:
 *                 type: string
 *                 example: brandon@example.com
 *                 description: The user's email address.
 *               password:
 *                 type: string
 *                 example: your_password
 *                 description: The user's password.
 *               passwordConfirm:
 *                 type: string
 *                 example: your_password
 *                 description: Confirmation of the user's password.
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 token:
 *                   type: string
 *                   description: JWT token for the authenticated user
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Bad request, validation failed
 *       500:
 *         description: Server error
 */
router.post('/register', userController.register);


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve all users
 *     description: Fetch a list of all users in the system.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                 data:
 *                   type: object
 *                   properties:
 *                     users:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           email:
 *                             type: string
 *       500:
 *         description: Server error
 */
router.get('/users', userController.getAllUsers);

module.exports = router;