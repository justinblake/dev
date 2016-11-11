var express = require('express');
var puppyRouter = express.Router();
var Puppy = require('../models/puppy');


puppyRouter.get('/', function (req, res) {
    Puppy.find(function (err, puppies) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(puppies);
        }
    });
});

puppyRouter.get('/:puppyId', function (req, res) {
    Puppy.findById(req.params.puppyId, function (err, puppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(puppy);
        }
    })
});

puppyRouter.post('/', function (req, res) {
    var puppy = new Puppy(req.body);

    puppy.save(function (err, newPuppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newPuppy);
        }
    });

});

puppyRouter.put('/:puppyId', function (req, res) {
    Puppy.findByIdAndUpdate(req.params.puppyId, req.body, {new: true}, function (err, updatedPuppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(updatedPuppy);
        }
    })
});

puppyRouter.delete('/:puppyId', function (req, res) {
    Puppy.findByIdAndRemove(req.params.puppyId, function (err, puppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(puppy);
        }
    })
});


module.exports = puppyRouter;