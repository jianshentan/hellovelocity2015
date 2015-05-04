var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bitelabs', function(req, res, next) {
  res.render('project', { page_url: req.url });
});

router.get('/yinte', function(req, res, next) {
  res.render('project', { page_url : req.url });
});

router.get('/genecoin', function(req, res, next) {
  res.render('project', { page_url : req.url });
});

router.get('/mcmass', function(req, res, next) {
  res.render('project', { page_url : req.url });
});

router.get('/pinkhouse', function(req, res, next) {
  res.render('project', { page_url : req.url });
});

router.get('/beastmade', function(req, res, next) {
  res.render('project', { page_url : req.url });
});





module.exports = router;
