// var flag=false;
// const runProgram=(input)=>{
//     input =  input.trim().split("\n");
let board = [];
// for(let i=0;i<9;i++)
// {
//     board.push(input[i].trim().split(" ").map(Number))
// }
board = [
    [
        0, 4, 0, 0, 0,
        0, 1, 7, 9
    ],
    [
        0, 0, 2, 0, 0,
        8, 0, 5, 4
    ],
    [
        0, 0, 6, 0, 0,
        5, 0, 0, 8
    ],
    [
        0, 8, 0, 0, 7,
        0, 9, 1, 0
    ],
    [
        0, 5, 0, 0, 9,
        0, 0, 3, 0
    ],
    [
        0, 1, 9, 0, 6,
        0, 0, 4, 0
    ],
    [
        3, 0, 0, 4, 0,
        0, 7, 0, 0
    ],
    [
        5, 7, 0, 1, 0,
        0, 2, 0, 0
    ],
    [
        9, 2, 8, 0, 0,
        0, 0, 6, 0
    ]
]
// board = [
//     [0,0,0,0,0,0,0,9,0],
//     [2,0,0,0,0,0,0,0,0],
//     [0,0,3,0,0,0,6,0,0],
//     [0,0,0,0,5,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [8,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,7,0,0,0,0,5,0,0],
//     [0,0,0,0,0,0,0,0,0]
//     ]
// if(flag==false){
//     console.log(-1)
// }
// }

const CheckPosition = (row, col, board, k) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === k) {
            return false;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === k) {
            return false;
        }
    }
    if (col < 3) {
        if (row < 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
        else if (row < 6) {
            for (let i = 3; i < 6; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }

        }
        else {
            for (let i = 6; i < 9; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
    }
    else if (col < 6) {
        if (row < 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 3; j < 6; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
        else if (row < 6) {
            for (let i = 3; i < 6; i++) {
                for (let j = 3; j < 6; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }

        }
        else {
            for (let i = 6; i < 9; i++) {
                for (let j = 3; j < 6; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
    }
    else {
        if (row < 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 6; j < 9; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
        else if (row < 6) {
            for (let i = 3; i < 6; i++) {
                for (let j = 6; j < 9; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }

        }
        else {
            for (let i = 6; i < 9; i++) {
                for (let j = 6; j < 9; j++) {
                    if (board[i][j] === k) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

const Sudoku = (board, row, col) => {
    if (row === 9) {
        flag = true;
        let box = document.querySelector("#single");
        box.innerText = board
        // for (let i = 0; i < board.length; i++) {
        //     // console.log(board[i].join(" "))
        // }
        return;
    }
    let next_row = 0;
    let next_col = 0;
    if (col == 8) {
        next_row = row + 1;
        next_col = 0;
    }
    else {
        next_row = row;
        next_col = col + 1;
    }
    if (board[row][col] != 0) {
        Sudoku(board, next_row, next_col)
    }
    else {
        for (let k = 1; k <= 9; k++) {
            if (CheckPosition(row, col, board, k)) {
                board[row][col] = k;
                Sudoku(board, next_row, next_col)
                board[row][col] = 0;
            }

        }
    }
}
Sudoku(board, 0, 0)

// if (process.env.USER === "") {
//   runProgram(``);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }