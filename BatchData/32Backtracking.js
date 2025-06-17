function solveNQueens(N) {
    let board = Array(N).fill().map(() => Array(N).fill(false));
    let solutions = [];
    console.log("inside solveNQueens");
    
    function isSafe(row, col) {
        console.log("inside isSafe");
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col]) return false;
        }
        // Check diagonal (upper left)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) return false;
        }
        // Check diagonal (upper right)
        for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
            if (board[i][j]) return false;
        }
        return true;
    }
    function solve(row) {
        console.log("inside solve");
        if (row === N) {
            let solution = board.map(r => r.map(c => (c ? 'Q' :
                '.')).join(''));
            solutions.push(solution);
            return;
        }
        for (let col = 0; col < N; col++) {
            if (isSafe(row, col)) {
                board[row][col] = true;
                solve(row + 1);
                board[row][col] = false; // Backtrack
            }
        }
    }
    solve(0);
    return solutions;
}
let N = 6;
console.log(solveNQueens(N));