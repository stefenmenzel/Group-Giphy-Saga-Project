const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM category ORDER BY category_name ASC`;
    pool.query(queryText)
        .then( (result) => {
            console.log('Response from GET categories route:', result);
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const queryText = `
        INSERT INTO "category" ("category_name")
        VALUES ($1);
    `
    pool.query(queryText, [req.body.category])
    .then((result) => {
        console.log("Response from POST category route:", result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST category route:', error);
        res.sendStatus(500);
    });
});

module.exports = router;
