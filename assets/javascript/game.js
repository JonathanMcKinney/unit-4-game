

    var goal = Math.floor(Math.random() * 102 + 19); //create a random # between 19 and 120
    $("#ranGoal").text(goal);
    var guesses = [];
    var sum = 0;
    var loss= 0;
    var win = 0;
    
    function reset () {
        sum = 0;
        $("#total").text(sum);
        guesses = [];
        goal = Math.floor(Math.random() * 102 + 19);
        $("#ranGoal").text(goal);

        for (var i=0; i < 4; i++) {
            guesses.push(Math.floor(Math.random() * 12 + 1));
            guess.attr("data-guessvalue", guesses[i]);
        }
    }
    
    for (var i = 0; i < 4; i++) {
        guesses.push(Math.floor(Math.random() * 12 +1));
        var guess = $("<img>");
        guess.addClass("guess-image col-md-3");
        guess.attr("src","assets/images/ornament.jpg");
        guess.attr("data-guessvalue", guesses[i]);
        $(".guess").append(guess);
    }
    
    $(".guess-image").on("click", function() {
        var guessValue = ($(this).attr("data-guessvalue"));
        guessValue = parseInt(guessValue);
        sum += guessValue;
        $("#total").text(sum);
    
        if (sum === goal) { 
            alert("You Win! Keep going!");
            win++;
            $("#winCount").text(win);
            reset();
        }
        else if (sum >= goal) {
            alert("Sorry, you lose.  Try again!");
            loss++;
            $("#lossCount").text(loss);
            reset();
        }
    });

