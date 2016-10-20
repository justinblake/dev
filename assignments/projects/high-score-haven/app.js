var randomTrash = ["I'm the best!", "Holy Crap You Suck!", "Did You Even Try?"];

var trash = '';

var $fullName = $('#fullName');
var $nameOfGame = $('#nameOfGame');
var $date = $('#dateOfRecord');
var $score = $('#score');


function newInput() {


    var $fullName = $('#fullName');
    var $nameOfGame = $('#nameOfGame');
    var $date = $('#dateOfRecord');
    var $score = $('#score');


    $('#display').click(function () {
        if ($('#checked')) {
            var randomDec = Math.random();
            var parseRandom = Math.floor(randomDec * 3);
            trash = randomTrash[parseRandom];

            var newName = $fullName.val();
            var newGame = $nameOfGame.val();
            var newDate = $date.val();
            var newScore = $score.val();
            var newChecked = trash;


        }

        $('#paste-name').append("<p>" + newName + "</p>");
        $('#paste-game').append("<p>" + newGame + "</p>");
        $('#paste-date').append("<p>" + newDate + "</p>");
        $('#paste-score').append("<p>" + newScore + "</p>");
        $('#paste-insult').append("<p>" + newChecked + "</p>");


    });


}

newInput();


