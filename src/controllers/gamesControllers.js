const gamesModel = require('../models/gamesModels');

async function getAll(req, res) {
    const search = req.query.search;
    let games = await gamesModel.getAllGames();
    if (search) {
        games = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()));
    }
    res.render('pages/index', { games, query: req.query });
}

function getAddForm(req, res) {
    res.render('pages/add');
}

async function postAdd(req, res) {
    const { title, developer, year, desc, status } = req.body;
    await gamesModel.addGame(title, developer, year, desc, status );
    res.redirect('/');
}

async function getEditForm(req, res) {
    const game = await gamesModel.getGameById(req.params.id);
    res.render('pages/edit', { game });
}

async function getList(req, res) {
    const games = await gamesModel.getAllGames();
    res.render('pages/list', { games });
}

async function getGamesDetails(req, res) {
    const game = await gamesModel.getGameById(req.params.id);
    res.render('pages/game', { game });
}

async function postEdit(req, res) {
    const { title, developer, year, desc, status } = req.body;
    await gamesModel.updateGame(req.params.id, title, developer, year, desc, status );
    res.redirect('/');
}

async function deleteGame(req, res) {
    await gamesModel.deleteGame(req.params.id);
    res.redirect('/');
}

module.exports = {
    getAll,
    getList,
    getAddForm,
    postAdd,
    getEditForm,
    postEdit,
    deleteGame,
    getGamesDetails
};
