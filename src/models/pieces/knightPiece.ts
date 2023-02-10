import { Cell } from '../cell'
import { Piece } from '../piece'
import { PieceType } from '../../types/pieceType'

export class KnightPiece extends Piece {
  public get type(): PieceType {
    return PieceType.KNIGHT
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
