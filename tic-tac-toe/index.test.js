/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

const solvedBoard = (board) => {
    for (let raw of board) {
        if (raw.every(v => v === 1) || raw.every(v => v === 2)) {
            return 1
        }
    }
    for (let i = 0; i < 3; i++) {
        const col = [board[0][i], board[1][i], board[2][i]]
        if (col.every(v => v === 1) || col.every(v => v === 2)) {
            return 1
        }
    }
    if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 
        || board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
        return 1
    }

    if (board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1 
        || board[2][0] === 2 && board[1][1] === 2 && board[0][2] === 2) {
        return 1
    }

    return -1
}

describe('Tests', () => {
  it('test solvedBoard', () => {
    expect(solvedBoard([[0,0,1], [0,1,2], [2,1,0]])).toStrictEqual(-1);
    expect(solvedBoard([[0,1,1], [0,1,2], [2,1,2]])).toStrictEqual(1);
  });
});
