import { ChessEventType } from '../../types/chessEventType'
import { Cell } from '../cell'
import { ChessEvent } from './cellEvent'

export class PieceMovedEvent extends ChessEvent {
  public readonly from: Cell
  public readonly to: Cell

  constructor(from: Cell, to: Cell) {
    super(ChessEventType.PIECE_MOVED)
    this.from = from
    this.to = to
  }
}
