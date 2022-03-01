const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js')

router.get('/addUser', (req, res) => {
    const user = {mail: 'test1.m@gmail.com', password:'102456', displayName: 'test1', profile:'reader'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async (err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});

router.get('/comments', (req, res) => {
    const str = [
        {
            "content": "Vous avez raison...",
            "date": "",
            "display name": "test1",
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addComments', (req, res) => {
    res.end('NA');
});

module.exports = router;