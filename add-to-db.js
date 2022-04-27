const { connectDb } = require('./src/connect-db');
const exercises = require('./exercises.json');

const db = connectDb();

for (let i = 0; i < exercises.length; i++) {
    db.collection('exercises')
    .add(exercises[i])
    .then((doc) => {
        console.log('Added exercise', doc.id);
    })
    .catch((err) => {
        console.error(err);
    });
};