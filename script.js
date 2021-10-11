let user_input;
let comp_input;
let rock = document.getElementById("btn_rock");
        let paper = document.getElementById("btn_paper");
        let scissor = document.getElementById("btn_scissor");
        const options = ['rock', 'paper', 'scissor'];
        const comp_win = 'Sorry, you lose';
        const user_win = 'You won';
        let index;
        let result_area = document.getElementById('result');
        let scores = document.getElementById('score');
        let comp_score = 0;
        let user_score = 0;
        let temp_string;

        scores.innerHTML = "Computer " + comp_score + ": You " + user_score;
        
            temp_string = 'Round ' + index;
            result_area.innerHTML = temp_string;

            rock.addEventListener('click', () => {
                user_input = "rock";
                comp_input = options[getComputerInput()];
                console.log(comp_input);
                console.log("user: "+ user_input);

                if ((user_input == "rock" && comp_input == "paper") || (user_input == "scissor" && comp_input == "rock") || (user_input == "paper" && comp_input == "scissor")) {
                    comp_score += 1;
                } else {
                    if ((user_input == "rock" && comp_input == "scissor") || (user_input == "scissor" && comp_input == "paper") || (user_input == "paper" && comp_input == "rock")) {
                        user_score += 1;
                    }
                }
                temp_string = 'Computer ' + comp_score + " : " + 'You ' + user_score;
                scores.innerHTML = temp_string;
            });
            paper.addEventListener('click', () => {
                user_input = "paper";
                comp_input = options[getComputerInput()];
                console.log(comp_input);
                console.log("user: "+ user_input);

                if ((user_input == "rock" && comp_input == "paper") || (user_input == "scissor" && comp_input == "rock") || (user_input == "paper" && comp_input == "scissor")) {
                    comp_score += 1;
                } else {
                    if ((user_input == "rock" && comp_input == "scissor") || (user_input == "scissor" && comp_input == "paper") || (user_input == "paper" && comp_input == "rock")) {
                        user_score += 1;
                    }
                }
                temp_string = 'Computer ' + comp_score + " : " + 'You ' + user_score;
                scores.innerHTML = temp_string;
            });
            scissor.addEventListener('click', () => {
                user_input = "scissor";
                comp_input = options[getComputerInput()];
                console.log(comp_input);
                console.log("user: "+ user_input);

                if ((user_input == "rock" && comp_input == "paper") || (user_input == "scissor" && comp_input == "rock") || (user_input == "paper" && comp_input == "scissor")) {
                    comp_score += 1;
                } else {
                    if ((user_input == "rock" && comp_input == "scissor") || (user_input == "scissor" && comp_input == "paper") || (user_input == "paper" && comp_input == "rock")) {
                        user_score += 1;
                    }
                }
                temp_string = 'Computer ' + comp_score + " : " + 'You ' + user_score;
                scores.innerHTML = temp_string;
            });

            function getComputerInput() {
                return Math.floor(Math.random() * options.length);
            }

            /*if (comp_score > user_score) {
            result_area.innerHTML = comp_win;
            } else {
                result_area.innerHTML = user_win;
            }*/

        //user choose an option
        //computer choose an option
        //rock - paper: paper win
        // rock - scissor- rock win
        // paper - scissor -> scissor
        //repeat this 3 times using for loop
        //whoever with higher score wins