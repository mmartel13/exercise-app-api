const express = require('express');
const cors = require('cors');
const { getExercises, getExercise } = require('./functions');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT);
});

app.get('/exercises', getExercises);
app.get('/exercises/:id', getExercise);
