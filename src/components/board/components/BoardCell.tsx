import { Cell } from '../../../models/cell'
import BoardPiece from './BoardPiece'
import styles from '../Board.module.css'
import { cn } from '../../../utility/cssClassUtility'

interface IProps {
  cell: Cell
  isSelected: boolean
  isAvailable: boolean
  onClick: (cell: Cell) => void
}

const BoardCell = ({ cell, isSelected, isAvailable, onClick }: IProps) => {
  const white = (cell.x + cell.y) % 2 == 0 ? styles.cell_white : undefined
  const black = (cell.x + cell.y) % 2 == 1 ? styles.cell_black : undefined
  const selected = isSelected ? styles.cell_selected : undefined
  const available = isAvailable ? styles.cell_available : undefined

  return (
    <div
      onClick={() => onClick(cell)}
      className={cn(styles.cell, undefined, white, black, selected, available)}
    >
      {cell.piece ? <BoardPiece piece={cell.piece} /> : null}
    </div>
  )
}

export default BoardCell
