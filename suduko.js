import { sudoku } from "./sudokuData.js";
var sudoku2 = [];
const SudokuFunction = () => {
    const Check = (sudoku, col, row, k) => {
        for (let i = 0; i < 9; i++) {
            if (sudoku[row][i] === k) {
                return false;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (sudoku[i][col] === k) {
                return false;
            }
        }
        if (row < 3) {
            if (col < 3) {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else if (col < 6) {
                for (let i = 0; i < 3; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else {
                for (let i = 0; i < 3; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            }
        } else if (row < 6) {
            if (col < 3) {
                for (let i = 3; i < 6; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else if (col < 6) {
                for (let i = 3; i < 6; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else {
                for (let i = 3; i < 6; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            }
        } else {
            if (col < 3) {
                for (let i = 6; i < 9; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else if (col < 6) {
                for (let i = 6; i < 9; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            } else {
                for (let i = 6; i < 9; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (sudoku[i][j] === k) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };
    const SudokuSolver = (sudoku, row, col) => {
        if (row === 9) {
            sudoku.map((el) => {
                sudoku2.push(el.join(""));
            });
            return;
        }
        let next_row = 0;
        let next_col = 0;
        if (col === 8) {
            next_col = 0;
            next_row = row + 1;
        } else {
            next_col = col + 1;
            next_row = row;
        }
        if (sudoku[row][col] != 0) {
            SudokuSolver(sudoku, next_row, next_col);
        } else {
            for (let j = 1; j <= 9; j++) {
                if (Check(sudoku, col, row, j)) {
                    sudoku[row][col] = j;
                    SudokuSolver(sudoku, next_row, next_col);
                    sudoku[row][col] = 0;
                }
            }
        }
    };
    SudokuSolver(sudoku, 0, 0);
};
SudokuFunction();
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
let block3 = document.getElementById("block3");
let block4 = document.getElementById("block4");
let block5 = document.getElementById("block5");
let block6 = document.getElementById("block6");
let block7 = document.getElementById("block7");
let block8 = document.getElementById("block8");
let block9 = document.getElementById("block9");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block1.append(div);
    }
}
for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block2.append(div);
    }
}
for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block3.append(div);
    }
}
for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block4.append(div);
    }
}
for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block5.append(div);
    }
}
for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block6.append(div);
    }
}
for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block7.append(div);
    }
}
for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block8.append(div);
    }
}
for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
        let div = document.createElement("div");
        if (sudoku[i][j] === 0) {
            let Input = document.createElement("input");
            Input.setAttribute("type", "number");
            Input.addEventListener("input", (event) => {
                event.preventDefault();
                let latnum = Input.value[Input.value.length - 1]
                Input.value = latnum
                sudoku[i][j] = +latnum;
                CheckSudoku();
            });
            div.append(Input);
        } else {
            div.innerText = sudoku[i][j];
        }
        block9.append(div);
    }
}
const CheckSudoku = () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] != sudoku2[i][j]) {
                return;
            }
        }
    }
    let mainContainer = document.getElementById('mainContainer')
    mainContainer.style.display = "flex"
};
let btn = document.getElementById('RestartBtn')
btn.addEventListener("click", () => {
    window.location.href = "./index.html";

})