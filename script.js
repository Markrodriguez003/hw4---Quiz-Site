var questionsArr = [
    "Which of the choices below is used the jQuery shorthand selector?",
    "What is jQuery used for?",
    "Which one of the choices below is not a jQuery method?",
    "What is used to create and track behaviors on a website? (Mouse clicking, hovering over elements, ect)",
    "What scripting language do you use to ulitize jQuery?",
    "Where do you insert the link for jQuery in a html document?",
    "Which of the choices below is a valid jQuery selection of a html element? pt.1",
    "Which of the choices below is a valid jQuery selection of a html element? pt.2",
    "Which of the choices below is a valid jQuery selection of a html element? pt.3",
    "Which of the choices below is a valid jQuery selection of a html element? pt.4"
];

var answerArr = [

    " A. !{\"\"} B. @{\"\"} C. ^[\"\"] D. $(\"\") ",
    " A. Javascript Behaviors B. Changing CSS C. Selecting Html Elements D. All of the above ",
    " A. $(\".myBtn\") B. ${\"#myId\" +_ (\".Id2\")} C. $(\"#myDiv\") D.$(\"#myDiv span\")",
    " A. Event Listeners B. .append() C. Changing Scope D. Create a pointer to object ",
    " A. C++ B. Python C. Javascript D. Java ",
    " A. head tag /bottom of body tag B. before head tag C. in a meta tag D. in the footer ",
    " A. $(\".myHeader#!\") B. $(\".myP span\") C. $(\"!btn1\") D. $(\"..DivA\") ",
    " A. $(\"#one =! two\") B. $(\"header*!\") C. $(\"x.get()\") D.$(\"button\")   ",
    " A. $(\"#ul li:first\")   B. $(\"ul li:First\") C. $(\"div .myClass #myId + 87\") D. $(\"#!myBtn!#\") ",
    " A. $(\".myBtn()\")B. $(\"document\") C. $(\".myBtn #id div\")  D. $(\"console.log(x)\") "


]
var answersLtrs = ["d", "d", "b", "a", "c", "a", "b", "d", "a", "c"];




var instructionsText = $(".instructionsText");
var introText = $(".introText");

$(".instructionsBtn").on("click", function () {
    instructionsText.css("display", "block");
    introText.css("display", "none");


})
$(".goBackBtn").on("click", function () {
    instructionsText.css("display", "none");
    introText.css("display", "block");

})

var timeMins = $(".timerCard .timerM");
var timeSecs = $(".timerCard .timerS");


function timerStart() {

    const secs = 60;
    var m = 5;
    var s = 59;


    var timerSet = setInterval(() => {

        if (s <= 59 && s > 9) {
            timeSecs.get(0).innerText = s;
            s--;
            if (m === 5) {
                m--;
                timeMins.get(0).innerText = "0" + m;
            }
        } else if (s < 10 && s > 0) {
            timeSecs.get(0).innerText = "0" + s;
            s--;
        } else if (s === 0 && m != 0) {
            m--;
            s = 59;
            timeSecs.get(0).innerText = s;
            timeMins.get(0).innerText = "0" + m;
        } else if (m < 0 || m === 0) {
            timeSecs.get(0).innerText = "0" + s;
            timeMins.get(0).innerText = "0" + m;
            m = 0;
            s = 0;
            console.log("HEY IT GOT HERE!");
            clearInterval(timerSet);
            gameOver();
        }
    }, 1000);
}



/*  console.log($(".choiceBtns button").get(0).innerText); */ // GRABS LETTER FROM BUTTON


/* var x = 0; */

var userScore = 0;

$(".questionText").get(0).innerText = questionsArr[0];
$(".questionChoices").get(0).innerText = answerArr[0];

function gameStart() {
    timerStart();
    var gameLoop = true;
    var questionI = 0;
    /*  questions:   0    1    2    3    4    5    6    7    8    9
    answers:        ["d", "b", "b", "a", "c", "a", "b", "d", "a", "c"]; */

    quizQuestionAmount = 10;
    if (gameLoop === true) {
        var questionI = 0;
        $(".choiceBtns button").on("click", function (e) {
            var userChoice = e.target.innerText;
            var finalChoice = userChoice.toString().toLowerCase();


            if (questionI !== 10) {

                if (finalChoice === answersLtrs[questionI]) {
                    console.log(answersLtrs[questionI]);
                    console.log("RIGHT");
                    userScore = + 10;
                    $(".score").get(0).innerText = userScore;
                    $(".questionCounter").get(0).innerText = questionI + 1;
                    $(".questionText").get(0).innerText = questionsArr[questionI];
                    $(".questionChoices").get(0).innerText = answerArr[questionI];
                    questionI++;

                } else if (finalChoice != answersLtrs[questionI]) {
                    console.log("WRONG");
                    console.log(answersLtrs[questionI]);
                    userScore = - 10;
                    $(".score").get(0).innerText = userScore;
                    $(".questionCounter").get(0).innerText = questionI + 1;
                    $(".questionText").get(0).innerText = questionsArr[questionI];

                    $(".questionChoices").get(0).innerText = answerArr[questionI];
                    questionI++;
                } else {

                    gameOver();
                    gameLoop = false;
                }


            }


        })


    }









}

gameStart();


function gameOver() {
    console.log("GAME OVER BUDDY!");
}






