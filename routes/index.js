var express = require('express');
var router = express.Router();
var spaces = require('../server/models').spaces

var dbtitle = spaces.findAll( {}
  ).then(function(spaces){
    spaces.forEach(function(space){
      console.log(space.get('title'))
    })

  })




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers', description: dbtitle});
});

module.exports = router;
