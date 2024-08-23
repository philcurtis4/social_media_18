const router = require('express').Router();

const user_controller = require('../controllers/user_controller');

//USERS

//Get Route to retrieve all users
router. get('/users', user_controller.getAllUsers);

//Get a User by their ID
router.get('/user/:id', user_controller.getSingleUser);

//Create a User
router.post('/user', user_controller.createUser);



//THOUGHTS

//get all thoughts
router.get('/thoughts', user_controller.getAllThoughts);

//get a sing thought by ID
router.get('/thought/:id', user_controller.getSingleThought);

//Create a thought
router.post('/thought', user_controller.createThought);

module.exports = router;