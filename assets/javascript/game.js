

    var goal = Math.floor(Math.random() * 102 + 19); //create a random # between 19 and 120
    $("#ranGoal").text(goal);
    var guesses = [];
    var sum = 0;
    var loss= 0;
    var win = 0;

    var pic = ["assets/images/ornament1.jpg", "assets/images/ornament.jpg","assets/images/ornament2.jpg", "assets/images/ornament3.jpg"]
    
    function reset () {
        sum = 0;
        $("#total").text(sum);
        goal = Math.floor(Math.random() * 102 + 19);
        $("#ranGoal").text(goal);
        
        guesses = [];
        for (var i=0; i < 4; i++) {
            newGuess = $(".ornament-"+[i+1]);
            guesses.push(Math.floor(Math.random() * 12 + 1));
            newGuess.attr("data-guessvalue", guesses[i]);
        }
        
    }
    
    for (var i = 0; i < 4; i++) {
        guesses.push(Math.floor(Math.random() * 12 +1));
        var guess = $("<img>");
        guess.addClass("guess-image col-md-3");
        guess.addClass("ornament-"+[i+1]);
        guess.attr("src",pic[i]);
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

