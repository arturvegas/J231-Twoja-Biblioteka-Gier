const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

async function getAllGames() {
    const db = getDB();
    return await db.collection('games').find().sort({ createdAt: -1 }).toArray();
}

async function getGameById(id) {
    const db = getDB();
    return await db.collection('games').findOne({ _id: new ObjectId(id) });
}

async function addGame(title, developer, year, desc, status = 'do kupienia') {
    const db = getDB();
    await db.collection('games').insertOne({ title, developer, year, desc, status, createdAt: new Date() });
}

async function updateGame(id, title, developer, year, desc, status) {
    const db = getDB();
    await db.collection('games').updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, developer, year, desc, status } }
    );
}

async function deleteGame(id) {
    const db = getDB();
    await db.collection('games').deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllGames, getGameById, addGame, updateGame, deleteGame };
