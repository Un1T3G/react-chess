import { useEffect, useState } from 'react'
import { Board } from '../../models/board'
import Card from '../../ui/card/Card'
import { mapTo1DArray } from '../../utility/2dArrayUtility'
import styles from './Board.module.css'
import BoardCell from './components/BoardCell'
import { Cell } from '../../models/cell'

interface IProps {
  board: Board
  selectedCell?: Cell,
  availableCells: Cell[]
  onClickCell: (cell: Cell) => void
}

const BoardComponent = ({
  board,
  selectedCell,
  availableCells,
  onClickCell,
}: IProps) => {
  return (
    <Card className={styles.board}>
      {mapTo1DArray(board.cells).map((cell) => (
        <BoardCell
          key={cell.id}
          cell={cell}
          isSelected={cell.id === selectedCell?.id}
          isAvailable={availableCells.includes(cell)}
          onClick={onClickCell}
        />
      ))}
    </Card>
  )
}

export default BoardComponent
