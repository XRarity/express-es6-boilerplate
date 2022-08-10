// routes/index.js
import express from 'express';

import addItem from './base';
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('welcome')
//   res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
    console.log('test route')
    // addItem
    // res.render('base', { title: 'Base' });
})
router.get('/notes', function(req, res, next) {
    console.log('GET notes')
    res.status(200).send('notes')
})

export default router;