import {useState} from 'react'


const generateBoard = (size: number) => {
    const newBoard = []
    for (let i = 0; i < size; i++) {
        newBoard.push([...Array(size)])
    }
    return newBoard
}
const TicTacToe = () => {
    const [board, setBoard] = useState(generateBoard(3))
  return (
    <div>
        {board.map((row, r) => {
            return(
                <div key={r} style={{display: 'flex'}}>
                    {row.map((cell, c) => {
                        return(
                            <div key={c} style={{border: '1px solid black', width: '100px', height: '100px'}}>
                               {cell}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default TicTacToe