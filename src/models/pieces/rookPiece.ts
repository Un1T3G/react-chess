import { Cell } from '../cell'
import { Piece } from '../piece'
import { PieceType } from '../../types/pieceType'

export class RookPiece extends Piece {
  public get type(): PieceType {
    return PieceType.ROOK
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    if (this.isEmptyVertical(target)) {
      return true
    }

    if (this.isEmptyHorizontal(target)) {
      return true
    }

    return false
  }
}
