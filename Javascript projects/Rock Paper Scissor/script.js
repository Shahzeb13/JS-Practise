let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
        updateScoreElement();

        function pickComputerMove() {
            const moves = ['rock', 'paper', 'scissor'];
            return moves[Math.floor(Math.random() * 3)];
        }

        function updateScoreElement() {
            document.querySelector('.js-score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
        // ider necha ma js-buttons ko select karna ka code likun ga with the help of  event listeners 
        //Rock button kalya code
        let rockButton = document.querySelector('.js-rock-btn');
        rockButton.addEventListener('click' , () => {
            playGame('rock');
        });
        //paper button par event listener kalya code
        let paperButton = document.querySelector('.js-paper-btn');
        paperButton.addEventListener('click' , () => {
            playGame('paper');
        });
        //scissors button par event listener kalya code
        let scissorButton = document.querySelector('.js-scissor-btn');
        scissorButton.addEventListener('click' , () => {
            playGame('scissor');
        });
        //reset score button par event listener ka code
        let deleteScoreBtn = document.querySelector('.js-delete-btn');
        deleteScoreBtn.addEventListener('click' , () => {
            resetScore();
        });
        //for AutoPlay button
        let autoPlayBtn = document.querySelector('.js-autoplay-btn');
        autoPlayBtn.addEventListener('click' , () => {
            autoPlay();
        });

        //Now, i am gonna add a new feature where I can play the game with keybooad as when I click r , my move will be rock and so on.....
        document.body.addEventListener('keydown' , (event) => { //addEventListener() provides aan event object through which we can know what key did we presss on the keyboard;
            if(event.key === 'r'){
                playGame('rock');
            } else if (event.key === 'p'){
                playGame('paper');
            } else if (event.key === 's'){
                playGame('scissor');
            }

        })


        function playGame(userMove) {
            let computerMove = pickComputerMove();
            let result = '';
            
            if (userMove === computerMove) {
                result = "It's a tie!";
                score.ties++;
            } else if (
                (userMove === 'rock' && computerMove === 'scissor') ||
                (userMove === 'paper' && computerMove === 'rock') ||
                (userMove === 'scissor' && computerMove === 'paper')
            ) {
                result = "You won!";
                score.wins++;
            } else {
                result = "You lost!";
                score.losses++;
            }
            
            localStorage.setItem('score', JSON.stringify(score));
            updateScoreElement();
            
            document.querySelector('.js-moves').innerHTML = `
                <img src="Image/${userMove}.png" alt="Your move">
                <span>vs</span>
                <img src="Image/${computerMove}.png" alt="Computer move">
            `;
            document.querySelector('.js-result').textContent = result;
        }

        function resetScore() {
            localStorage.removeItem('score');
            score = { wins: 0, losses: 0, ties: 0 };
            updateScoreElement();
        }
         
        let isAutoPlaying = false;
        let intervalId;
        function autoPlay() {
            // let userMove = pickComputerMove();
            // setInterval(playGame(userMove)  , 1000)///ma setInterval ma direct playGame kyun nai use kar pa raha 
             // matlab game abi chalu nai hua ha
            // let intervalId;  // i think function dubara run hona ka karan intervalId reinitialize hojata ha is lya else block ma clearInterval setInterval ko rok nai paa raha ha
            if(!isAutoPlaying){
            console.log(`Game Started`);
            intervalId = setInterval(function() {
                const userMove = pickComputerMove();
                playGame(userMove);
            } ,2000)
            isAutoPlaying = true; // issue ya ha ka ider tho true ho jata ha isAutoPlaying par uper function run hona par pir sa false h jata ha
            console.log(isAutoPlaying);
        } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
                console.log(isAutoPlaying);
                console.log('Game Stoped');
            }

        }