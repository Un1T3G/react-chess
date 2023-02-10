import Actions from './components/actions/Actions'
import BoardComponent from './components/board/Board'
import LostPieces from './components/lost-pieces/LostPieces'
import Timer from './components/timer/Timer'
import { ColorType } from './types/colorType'
import styles from './App.module.css'
import { Cell } from './models/cell'
import { useAppReducer } from './store/appReducer'

const App = () => {
  const [state, dispatch] = useAppReducer()

  const onCellClickHandler = (cell: Cell) => {
    if (state.selectedCell && state.selectedCell?.id === cell.id) {
      dispatch({ type: 'CHANGE_SELECTED_CELL', selectedCell: undefined })
      return
    }

    if (state.selectedCell?.piece?.canMove(cell)) {
      state.selectedCell.movePiece(cell)
      dispatch({ type: 'SWAP_TURN' })
      dispatch({ type: 'CHANGE_SELECTED_CELL', selectedCell: undefined })
      return
    }

    if (cell.piece?.color === state.currentTurn){
      dispatch({ type: 'CHANGE_SELECTED_CELL', selectedCell: cell })
    }
  }

  const onRestartHandler = () => {
    dispatch({ type: 'RESTART_GAME' })
  }

  const onTimerElapsed = (color: ColorType) => {
    dispatch({ type: 'RESTART_GAME' })
    alert(`${color} is defeat!`)
  }

  const onBackHandler = () => {
    dispatch({ type: 'BACK' })
  }

  return (
    <div className={styles.app}>
      <div className={styles.app__row}>
        <div className={styles.app__block}>
          <Timer turn={state.currentTurn} onTimerElapsed={onTimerElapsed} />
          <BoardComponent
            board={state.game.board}
            selectedCell={state.selectedCell}
            availableCells={state.availableCells}
            onClickCell={onCellClickHandler}
          />
          <Actions
            onClickRestart={onRestartHandler}
            onClickBack={
              state.game.hasLostBoardState ? onBackHandler : undefined
            }
          />
        </div>
        <LostPieces lostPieces={state.game.lostPieces} />
      </div>
    </div>
  )
}

export default App
