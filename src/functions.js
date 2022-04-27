const { connectDb } = require('./connect-db');

const exerciseRef = connectDb().collection('exercises');

