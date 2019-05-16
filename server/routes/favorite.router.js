const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "favorite_links";
  `
  pool.query(queryText)
  .then((result) => {
    console.log("Response from GET favorites route:", result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error from GET favorites route:', error);
    res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  const queryText = `
    INSERT INTO "favorite_links"  ("giphy_link")
    VALUES ($1);
  `
  pool.query(queryText, [req.body.link])
  .then((result) => {
    console.log('Response from POST favorite route:', result);
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Error in POST favorite route:', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
