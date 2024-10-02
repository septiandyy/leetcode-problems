#include <stdbool.h>
#include <stdlib.h>

bool is_safe(int* board, int row, int col, int n) {
    for (int i = 0; i < row; i++) {
        if (board[i] == col || 
            board[i] - i == col - row || 
            board[i] + i == col + row) {
            return false;
        }
    }
    return true;
}

void solve_n_queens(int* board, int row, int n, int* count) {
    if (row == n) {
        (*count)++;
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (is_safe(board, row, col, n)) {
            board[row] = col;
            solve_n_queens(board, row + 1, n, count);
        }
    }
}

int totalNQueens(int n) {
    int* board = (int*)malloc(n * sizeof(int));
    int count = 0;
    
    solve_n_queens(board, 0, n, &count);
    
    free(board);
    return count;
}