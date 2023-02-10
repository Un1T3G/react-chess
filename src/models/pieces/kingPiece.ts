import { Cell } from '../cell'
import { Piece } from '../piece'
import { PieceType } from '../../types/pieceType'

export class KingPiece extends Piece {
  public get type(): PieceType {
    return PieceType.KING
  }

  public canMove(target: Cell): boolean {
    if (target.piece?.type === PieceType.KING && target.piece?.color) {
      console.log(target)
    }

    if (!super.canMove(target)) {
      return false
    }

    const isVerticalMove =
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      target.x === this.cell.x
    const isHorizontalMove =
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      target.y === this.cell.y
    const isLeftDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y - 1)
    const isRightDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y + 1)

    if (
      isVerticalMove ||
      isHorizontalMove ||
      isLeftDiagonal ||
      isRightDiagonal
    ) {
      return true
    }

    return false
  }
}
