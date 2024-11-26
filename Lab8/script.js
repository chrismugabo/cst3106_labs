function rollDice() {
    // Add an animation class
    $("#dice").addClass("rolling");

    setTimeout(function() {
        // Generate a random number between 1 and 6
        let randomNumber = Math.floor(Math.random() * 6) + 1;

        // Display the random number on the dice
        $("#dice").text(randomNumber);

        // Remove the animation class 
        $("#dice").removeClass("rolling");
    }, 1000); // Delay matches the animation duration
}

$(document).ready(function() {
    // Event listener for the roll button
    $("#rollButton").click(function() {
        rollDice();
    });
});
