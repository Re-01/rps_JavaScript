// js function
/* can block comment */

(() => {
    // like print in python (both method calls)
    console.log('loaded!');
    // can see mesage in developer tool
    // 

/* can also long hand like this function()
() => console.log
*/
    // same as aray in python
    
    var choices = ['Rock', 'Paper', 'Scissors'];
    var computer;
    var player = document.querySelector('#weapon');
    var trigger = document.querySelector('#play');
    var status = document.querySelector('.winlose');

    function play_game() {
        // make the computer choose a random weapon
        computer = choices[Math.floor(Math.random() * choices.length)];
        var player_choice = player.value;

        if (computer.toLowerCase() === player_choice.toLowerCase()) {
            // it's a tie
            status.textContent = "Tie! you live to shoot another day.";
        }

        else if (player_choice.toLowerCase() === "rock") {
            if (computer.toLowerCase() === "scissors") {
                // win
                status.textContent = `Win! ${player_choice} beats ${computer}.`; 
            } else {
                //lose
                status.textContent = `Lose! ${computer} beats ${player_choice}.`; 
            }

        }

        else if ( player_choice.toLowerCase() === "paper" ) {
            if (computer.toLowerCase() === "rock") {
                // win
                status.textContent = `Win! ${player_choice} beats ${computer}.`; 
            } else {
                //lose
                status.textContent = `Lose! ${computer} beats ${player_choice}.`; 
            }

        }

        else if ( player_choice.toLowerCase() === "scissors" ) {
            if (computer.toLowerCase() === "paper") {
                // win
                status.textContent = `Win! ${player_choice} beats ${computer}.`; 
            } else {
                //lose
                status.textContent = `Lose! ${computer} beats ${player_choice}.`; 
            }

        }

        else {
            player.value = "";
            alert("You didn't pick a valid weapon... try again");
        }
    }

    trigger.addEventListener('click', play_game);
})();

