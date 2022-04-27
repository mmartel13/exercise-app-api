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

   