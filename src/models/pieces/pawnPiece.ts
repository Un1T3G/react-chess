import { Cell } from '../cell'
import { ColorType, getDirection } from '../../types/colorType'
import { Piece } from '../piece'
import { PieceType } from '../../types/pieceType'

export class PawnPiece extends Piece {
  private _isFirstStep: boolean = false

  public get type(): PieceType {
    return PieceType.PAWN
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const direction = getDirection(this.color)
    const firstStepDirection =
      this.cell.piece?.color === ColorType.BLACK ? 2 : -2

    if (
      (target.y === this.cell.y + direction ||
        (this._isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.cells[target.x][target.y].isEmpty
    ) {
      return true
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.color !== target.piece?.color
    ) {
      return true
    }

    return false
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target)
    this._isFirstStep = true
  }
}
