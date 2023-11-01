const express = require('express');
const router = express.Router();





/* GET users listing. */
router.get('/', async function(req, res, next) {
  const connection = req.app.get("__connection");
  let result = await connection.query("SELECT 1+1 AS result");
  res.send(result);
  //res.json({message: '414'});
});

module.exports = router;
