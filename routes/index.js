var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  console.info('About to query the database... (if it gets stucked at this point, it is most likely because it can\'t reach the database)');
  db.get('visits').insert({
    'dateVisited': Date.now(),
  }, function(err, doc) {
    console.info('Visit recorded.');
    db.get('visits').find({}, {}, function(e, docs) {
      console.info('Visits found.');
      res.render('index', { title: 'Visits: ' + docs.length });
    });
  });
});

/* DB connections. */
router.get('/connections', function(req, res, next) {
  var status = req.db.serverStatus()
  res.render('index', { title: status.connections });
});

module.exports = router;
