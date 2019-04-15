const express = require('express');
const router = express.Router();

const Robots = require('../models/robots');


router.get('/', (req, res)=> {
    console.log('route hit');
    res.render('index.ejs', {
        "robots": Robots
    });
});
router.get('/new', (req, res)=>{
    res.render('new.ejs')
});

router.post('/', (req, res)=>{
    Robots.push(req.body)
    res.redirect('/robots')
});


router.get('/:id/edit', (req, res)=>{
    res.render('edit.ejs', {
        "robot": Robots[req.params.id],
        id: req.params.id
    });
});

router.get('/:id', (req, res)=>{
    res.render('show.ejs', {
        "robot": Robots[req.params.id],
        id: req.params.id 
    });
});


router.put('/:id', (req, res)=>{
    Robots[req.params.id] = req.body
    res.redirect('/robots')
});


router.delete('/:id', (req, res)=>{
    Robots.splice(req.params.id, 1)
    res.redirect('/robots')
});

module.exports = router;