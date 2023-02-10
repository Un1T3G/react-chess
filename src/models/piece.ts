import { Cell } from './cell'
import { ColorType } from '../types/colorType'
import { PieceType } from '../types/pieceType'

export abstract class Piece {
  public cell: Cell
  public readonly color: ColorType

  abstract get type(): PieceType

  constructor(cell: Cell, color: ColorType) {
    this.cell = cell
    this.color = color
  }

  protected isEmptyVertical(target: Cell): boolean {
    if (this.cell.x !== target.x) return false

    const min = Math.min(this.cell.y, target.y)
    const max = Math.max(this.cell.y, target.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.cell.board.cells[y][this.cell.x].isEmpty) {
        return false
      }
    }

    return true
  }

  protected isEmptyHorizontal(target: Cell): boolean {
    if (this.cell.y !== target.y) return false

    const min = Math.min(this.cell.x, target.x)
    const max = Math.max(this.cell.x, target.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.cell.board.cells[x][this.cell.y].isEmpty) {
        return false
      }
    }

    return true
  }

  protected isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.cell.x)
    const absY = Math.abs(target.y - this.cell.y)
    if (absX !== absY) return false

    const dy = this.cell.y < target.y ? 1 : -1
    const dx = this.cell.x < target.x ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if (
        !this.cell.board.cells[this.cell.x + dx * i][this.cell.y + dy * i]
          .isEmpty
      )
        return false
    }
    return true
  }

  public canMove(target: Cell): boolean {
    if (target.piece?.color === this.color) {
      return false
    }

    if (target.piece?.type === PieceType.KING) {
      return false
    }

    return true
  }

  public moveFigure(target: Cell): void {}
}
