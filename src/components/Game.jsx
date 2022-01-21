import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from './helper';
import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        //был ли клик по кнопке , был ли клик по ячейке
        if(winner || boardCopy[index]){
            return null
        }

        // определить чей ход х ? 0
        boardCopy[index] = xIsNext ? 'X' : 'O'

        // обновить state

        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null)) }> Очистить поле </button>
        )
    }


    return (
        <div className='Wrapper'>
            {startNewGame ()}
            <Board squares={board} click={handleClick}/>
            <p className='Counter'>
                {winner ?  'Победитель' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game;
