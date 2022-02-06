let user_input;
let comp_input;
let rock = document.getElementById("btn_rock");
let paper = document.getElementById("btn_paper");
let scissor = document.getElementById("btn_scissor");
const options = ['rock', 'paper', 'scissor'];
const comp_win = 'Sorry, you lose';
const user_win = 'You won';
let moves = 3;
let comp_score = 0;
let user_score = 0;
let result_area = document.getElementById('result');
let scores = document.getElementById('score');
let temp_string;
let comp_input_display = document.getElementById("computer");
let start = document.getElementById("startGame");


const startGame = () => {

    const game = () => {
        moves--;
        temp_string = 'Moves left ' + moves;
        result_area.innerHTML = temp_string;
        comp_input = options[getComputerInput()];
        //temp_string = "Computer chose " + comp_input + " & You chose " + user_input;
        //comp_input_display.innerHTML = temp_string;
        
        if ((user_input == "rock" && comp_input == "paper") || (user_input == "scissor" && comp_input == "rock") || (user_input == "paper" && comp_input == "scissor")) {
            comp_score += 1;
            temp_string = "Computer chose " + comp_input + " & You chose " + user_input;
            comp_input_display.innerHTML = temp_string;
        } else {
            if ((user_input == "rock" && comp_input == "scissor") || (user_input == "scissor" && comp_input == "paper") || (user_input == "paper" && comp_input == "rock")) {
                user_score += 1;
                temp_string = "Computer chose " + comp_input + " & You chose " + user_input;
            }
            else {
                ++moves;
                temp_string = 'Moves left ' + moves;
                result_area.innerHTML = temp_string;

                temp_string = "TIE";
            }
            comp_input_display.innerHTML = temp_string;
        }
        temp_string = 'Computer ' + comp_score + " : " + 'You ' + user_score;
        scores.innerHTML = temp_string;
        endGame();
    }
    
    const playGame = () => {
        start.style = "display: none";
        rock.style = "display: inline-block";
        paper.style = "display: inline-block";
        scissor.style = "display: inline-block";
        scores.style = "display: block";
        result_area.style = "display: block";
        comp_input_display.style = "display: block";
    
        scores.innerHTML = "Computer " + comp_score + " : You " + user_score;
    
        temp_string = 'Moves left ' + moves;
        result_area.innerHTML = temp_string;
    
        rock.addEventListener('click', () => {
            user_input = "rock";
            game();
        });
        paper.addEventListener('click', () => {
            user_input = "paper";
            game();
        });
        scissor.addEventListener('click', () => {
            user_input = "scissor";
            game();
        });
    }

    const getComputerInput = () => {
        return Math.floor(Math.random() * options.length);
    }
    
    /*const display = () => {
        if (moves == 0 || moves == 3) {
            
        } else {
            start.style.display = "none";
        }
    }*/
    
    const winner = () => {
        let main_body = document.querySelector('body');
        let gameBody = document.getElementById("game_body");

        if (moves == 0) {
            if (comp_score > user_score) {
                result_area.innerHTML = comp_win;
                main_body.style.backgroundColor = "rgb(243, 205, 196)"; gameBody.style.backgroundColor = "rgb(243, 205, 196)";

                } else {
                    result_area.innerHTML = user_win;
                    main_body.style.backgroundColor = "rgb(196, 243, 210)"; gameBody.style.backgroundColor = "rgb(196, 243, 210)";
                }
        }
    }
    
    const endGame = () => {
        if (moves == 0) {
            winner();
    
            start.style="display: block";
            rock.style="display: none";
            paper.style="display: none";
            scissor.style="display: none";
            scores.style="display: none";
            //result_area.style="display: none";
            comp_input_display.style="display: none";
            
            start.innerText = "Play Again";
            start.addEventListener('click', () => {
                window.location.reload();
            });

        } else {
            start.style="display: none";
        }
    }

    const atStart = () => {

        moves = -1;
        rock.style = "display: none";
        paper.style = "display: none";
        scissor.style = "display: none";
        scores.style = "display: none";
        result_area.style = "display: none";
        comp_input_display.style = "display: none";
        start.style = "display: block"; 
        start.innerText = "Start Game";

        if (moves == -1) {
            moves = 3;
            start.addEventListener('click', playGame);
            //start.addEventListener('click', playGame()); 
            //DON'T DO THIS MISTAKE EVER
            //it's start.addEventListener('click', function_name) and not function_name()
        }

    }

    atStart();
}

//display();

startGame();

//user choose an option
//computer choose an option
//rock - paper: paper win
// rock - scissor- rock win
// paper - scissor -> scissor
//repeat this 3 times using for loop
//whoever with higher score wins