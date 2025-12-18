const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesControllers');

const Game = require('../models/gamesModels');

router.get('/', gamesController.getAll);
router.get('/list', gamesController.getList);
router.get('/add', gamesController.getAddForm);
router.post('/add', gamesController.postAdd);
router.get('/edit/:id', gamesController.getEditForm);
router.post('/edit/:id', gamesController.postEdit);
router.post('/delete/:id', gamesController.deleteGame);
router.get('/game/:id', gamesController.getGamesDetails);


module.exports = router;
