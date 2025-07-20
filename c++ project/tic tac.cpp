#include <iostream>
using namespace std;

const int SIZE = 3;
char board[SIZE][SIZE];  
char currentPlayer = 'X';
/*I write variabels befor the function because These variables are global variables, and 
placing them before the functions makes them accessible to all functions in the file.*/

void initBoard() 
	{
    	for (int i = 0; i < SIZE; ++i)
        for (int j = 0; j < SIZE; ++j)
        board[i][j] = ' '; /*[i][j]-- mean Set the cell at row i and column j of the board to a space character ' '.*/
	}

void printBoard() /*  display the current state of the board */
	{
    	cout << endl;
    	for (int i = 0; i < SIZE; ++i) 
		{
        	cout << " ";
        	for (int j = 0; j < SIZE; ++j) 
			{
            	cout << board[i][j];
            	if (j < SIZE - 1) cout << " | ";
        	}
        	cout <<endl;
        	if (i < SIZE - 1)
            cout << "---+---+---"<<endl;
    	}
    	cout <<endl;
	}
	

bool isValidMove(int row, int col) 
	{
    	return row >= 0 && row < SIZE && col >= 0 && col < SIZE && board[row][col] == ' ';
	}

bool makeMove() 
	{
	    int row, col;
	    cout << "Player " << currentPlayer << ", enter your move (row and column: 2 2 for center. (use space between numbers)): ";
	    cin >> row >> col;
	    row--; col--; // Convert to 0-based index
	
	    if (!isValidMove(row, col)) 
		{
	        cout << "Invalid move. Try again."<<endl;
	        return false;
    	}

   	 board[row][col] = currentPlayer;
    	return true;
	}
	
	bool checkWin() 
	{
	    for (int i = 0; i < SIZE; ++i) 
		{
	        if (board[i][0] == currentPlayer &&
	            board[i][1] == currentPlayer &&
	            board[i][2] == currentPlayer)
	            return true;
	
	        if (board[0][i] == currentPlayer &&
	            board[1][i] == currentPlayer &&
	            board[2][i] == currentPlayer)
	            return true;
	    }
	
	    if (board[0][0] == currentPlayer &&
	        board[1][1] == currentPlayer &&
	        board[2][2] == currentPlayer)
	        return true;
	
	    if (board[0][2] == currentPlayer &&
	        board[1][1] == currentPlayer &&
	        board[2][0] == currentPlayer)
	        return true;
	
	    return false;
	}
	

bool checkDraw() 
	{
	    for (int i = 0; i < SIZE; ++i)
	        for (int j = 0; j < SIZE; ++j)
	            if (board[i][j] == ' ')
	                return false;
	    return true;
	}
	
	
	void switchPlayer() 
	{
	    if (currentPlayer == 'X') 
		{
	        currentPlayer = 'O';
	    } 
		else 
		{
	        currentPlayer = 'X';
	    }
	}


int main() 
	{
	    char playAgain = 'y';
	    while (playAgain == 'y' || playAgain == 'Y') /*  "||" indicate the OR logic gate. */
		{
	        initBoard();
	        currentPlayer = 'X';
	        bool gameOver = false;
	
	        while (!gameOver) 
			{
	            printBoard();
	            if (!makeMove()) continue;
	
	            if (checkWin()) 
				{
	                printBoard();
	                cout << "Player " << currentPlayer << " wins!"<<endl;
	                gameOver = true;
	            }
				 
				else if (checkDraw()) 
				{
	                printBoard();
	                cout << "It's a draw!"<<endl;
	                gameOver = true;
	            }
				 
				else 
				{
	                switchPlayer();
	            }
	        }
	
	        cout << "Play again? (y/n): ";
	        cin >> playAgain;
	    }
	
	    cout << "Thanks for playing!"<<endl;
	    return 0;
	}
