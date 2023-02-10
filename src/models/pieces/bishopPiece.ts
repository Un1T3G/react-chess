import { Cell } from '../cell'
import { Piece } from '../piece'
import { PieceType } from '../../types/pieceType'

export class BishopPiece extends Piece {
  public get type(): PieceType {
    return PieceType.BISHOP
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    if (this.isEmptyDiagonal(target)) {
      return true
    }

    return false
  }
}
