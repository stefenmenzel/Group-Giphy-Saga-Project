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

router.put('/', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.body.category:', req.body.category);
    console.log("req.body.id:", req.body.id);
    const queryText = `
        UPDATE "favorite_links"
        SET "category_id" = $1
        WHERE "id" = $2;
    `
    pool.query(queryText, [req.body.category, req.body.id])
    .then((result) => {
        console.log("Response from PUT category route:", result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in PUT category route:', error);
        res.sendStatus(500);
    });
});

module.exports = router;
