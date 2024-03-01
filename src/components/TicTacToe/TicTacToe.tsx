import './TicTacToe.css'
import useTicTacToe from '../../hooks/useTicTacToe'
import { useEffect } from 'react';

const TicTacToe = () => {

  const { board, handleClick, handlePlayAgain, win } = useTicTacToe();

  useEffect(() => {

  }, [win])

  return (
    <div className='tictactoe-container'>
      <div className="grid-container">
        {
          board.map((innerArray, outerIndex) => (
            innerArray.map((value, innerIndex) => (
              <div
                className="grid-item"
                key={innerIndex}
                onClick={(e) => { handleClick(e, outerIndex, innerIndex) }}
              >
                {value}
              </div>
            ))
          ))
        }
      </div>
      <div>
        <button
          onClick={ handlePlayAgain }
        >
          play again
        </button>
        <div>
          { win ? "true" : false}
        </div>
      </div>
    </div>
  )
}

export default TicTacToe