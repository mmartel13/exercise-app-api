const { json } = require('express');
const { connectDb } = require('./connect-db');

const exerciseRef = connectDb().collection('exercises');

exports.getExercises = (req, res) => {
    return exerciseRef
    .get()
    .then((snapshot) => {
        const exerciseList = snapshot.docs.map((doc) => {
            let exercise = doc.data();
            exercise.id = doc.id;
            return exercise;
        })
        res.status(200).send(exerciseList);
    })
    .catch((err) => res.status(500).send(err));
}


exports.getExercise = (req, res) => {
    return exerciseRef
    .doc(req.params.id)
    .get()
    .then(doc => {
        const exercise = doc.data();
        exercise.id = doc.id;
        res.send(exercise)
    })
    .catch((err) => res.status(500).send(err));
}
   