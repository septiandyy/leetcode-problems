#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define MAX_N 9

bool is_safe(int board[MAX_N][MAX_N], int row, int col, int n) {
    for (int i = 0; i < col; i++)
        if (board[row][i])
            return false;
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false;
    for (int i = row, j = col; j >= 0 && i < n; i++, j--)
        if (board[i][j])
            return false;
    return true;
}

void solve_n_queens_util(int board[MAX_N][MAX_N], int col, int n, char*** solutions, int* solution_count, int* solution_size) {
    if (col == n) {
        solutions[*solution_count] = malloc(n * sizeof(char*));
        for (int i = 0; i < n; i++) {
            solutions[*solution_count][i] = malloc((n + 1) * sizeof(char));
            for (int j = 0; j < n; j++)
                solutions[*solution_count][i][j] = board[i][j] ? 'Q' : '.';
            solutions[*solution_count][i][n] = '\0';
        }
        (*solution_count)++;
        return;
    }

    for (int i = 0; i < n; i++) {
        if (is_safe(board, i, col, n)) {
            board[i][col] = 1;
            solve_n_queens_util(board, col + 1, n, solutions, solution_count, solution_size);
            board[i][col] = 0;
        }
    }
}

char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
    int board[MAX_N][MAX_N] = {0};
    char*** solutions = malloc(1000 * sizeof(char**));
    *returnSize = 0;
    solve_n_queens_util(board, 0, n, solutions, returnSize, returnColumnSizes);
    
    *returnColumnSizes = malloc(*returnSize * sizeof(int));
    for (int i = 0; i < *returnSize; i++)
        (*returnColumnSizes)[i] = n;
    
    return solutions;
}