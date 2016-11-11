var addObjectToStuff = function (req, res, next) {

    req.newObject = {
        name: "New Object",
        description: "More New Stuff"
    };

    console.log("i'm in the middle");

    next();

};

module.exports = addObjectToStuff;