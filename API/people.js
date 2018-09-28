const express = require('express');

const router = express.Router();

const queries = require('../DB/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validPerson(person) {
    const hasFirst = typeof person.first == 'string' && person.first.trim() != '';
    const hasLast = typeof person.last == 'string' && person.last.trim() != '';
    const hasURL = typeof person.url == 'string' && person.url.trim() != '';
    const hasDescription = typeof person.description == 'string' && person.description.trim() != '';
    const hasAge = !isNaN(person.age);
    return hasFirst && hasLast && hasURL && hasDescription && hasAge;
}


router.get('/', (req, res) => {
    queries.getAll().then(people => {
        res.json(people);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(person => {
        if (person) {
            res.json(person);
        } else {
            next();
        }
    })
});

router.post('/', (req, res, next) => {
    if(validPerson(req.body)){
        queries.create(req.body).then(people => {
            res.json(people[0]); 
        });
    } else {
        next(new Error('Invalid Person'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if(validPerson(req.body)){
        queries.update(req.params.id, req.body).then(people => {
            res.json(people[0]); 
        });
    } else {
        next(new Error('Invalid Person'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted:true
        });
    });
});

module.exports = router;