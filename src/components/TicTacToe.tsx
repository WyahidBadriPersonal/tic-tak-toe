import { useState } from "react";

type Board = (string | undefined)[][];


const generateBoard = (size: number) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]);
  }
  return newBoard;
};

const checkHorizontal = (board: Board) => {
    for(let row of board){
        const rowSet = new Set(row)
        if(rowSet.size == 1 && !rowSet.has(undefined)){
            return true
        }
    }
}

const rowsToColumns = (board: Board) => {
    const newBoard = []
    let column = 0
    while(column < board.length){
        const newRow = []
        for(let row = 0; row < board.length; row++){
            newRow.push(board[row][column])
        }
        newBoard.push(newRow)
        column++
    }
    return newBoard
}

const dialgonalToRow = (board: Board) => {
    const newBoard: Board = [[],[]]
    let increment = 0
    let decrement = board.length - 1

    while(increment < board.length){
        newBoard[0].push(board[increment][increment])
        newBoard[1].push(board[increment][decrement])
        increment++
        decrement--
    }
    return newBoard;
}

const checkWin = (board: Board) => {
  //Horizontal
  if(checkHorizontal(board)){
    return true
  }
  //Vertical
  if(checkHorizontal(rowsToColumns(board))){
    return true
  }
  //Diagonal
  if(checkHorizontal(dialgonalToRow(board))){
    return true
  }
}
const TicTacToe = () => {
  const [board, setBoard] = useState(generateBoard(3));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (r: number, c: number) => {
      board[r][c] = currentPlayer;
      setBoard([...board]);
      if(checkWin(board)){
          alert(`Player ${currentPlayer} wins!`);
          setBoard(generateBoard(3))
          setCurrentPlayer("X")
      }
      setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  }
  return (
    <div>
      {board.map((row, r) => {
        return (
          <div key={r} style={{ display: "flex" }}>
            {row.map((cell, c) => {
              return (
                <div
                  key={c}
                  onClick={()=>handleClick(r,c)}
                  style={{
                    border: "1px solid black",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe;
