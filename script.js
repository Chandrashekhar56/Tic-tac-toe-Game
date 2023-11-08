
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        const statusElement = document.getElementById('status');

// Function to handle a move
        function makeMove(cellIndex) 
        {
            if (gameBoard[cellIndex] === '' && !checkWinner()) 
            {
                gameBoard[cellIndex] = currentPlayer;
                document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateStatus();
            }
        }

// Function to update game status
        function updateStatus() 
        {
            if (!checkWinner() && gameBoard.includes('')) 
            {
                statusElement.textContent = `Player ${currentPlayer}'s turn`;
            } 
            else if (!gameBoard.includes('')) 
            {
                //document.write(gameBoard);
                statusElement.style.backgroundColor="red";
                statusElement.textContent = 'It\'s a tie!';
            }
        }

// Function to check for a win
        function checkWinner() {
            const matrix = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],

                ];

            for (const combo of matrix) 
            {
                const [a, b, c] = combo;
                if((gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]))
                { 
          //  document.write(gameBoard[a],gameBoard[b],gameBoard[c]);
                    statusElement.style.backgroundColor = "#56fd01";
                    statusElement.textContent = `Player ${gameBoard[a]} wins!`;


                    const container = document.getElementById("confetti-container");
                    for (let i = 0; i <500; i++) 
                    {
                        const confetti = document.createElement("div");
                        confetti.className = "confetti";
                        const r = Math.floor(Math.random() * 256);
                        const g = Math.floor(Math.random() * 256);
                        const b = Math.floor(Math.random() * 256);
                        confetti.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                        confetti.style.left = Math.random() * 100 + "vw";
                        confetti.style.animationDuration = (Math.random() *5 + 2) + "s";
                        confetti.style.animationDelay = Math.random() *0 + "s";
                        container.appendChild(confetti);

                        confetti.addEventListener("animationend", () => {
                            container.removeChild(confetti);
                        });
                    }
                    return true;
                }
            }
            return false;
        }
// Function to reset the game
        function resetGame() 
        {
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
            statusElement.textContent = `Player ${currentPlayer}'s turn`;
            statusElement.style.backgroundColor="white";
        }

        updateStatus();