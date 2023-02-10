import { ChessEventType } from '../../types/chessEventType'
import { Piece } from '../piece'
import { ChessEvent } from './cellEvent'

export class PieceDestroyedEvent extends ChessEvent {
  public readonly piece: Piece

  constructor(piece: Piece) {
    super(ChessEventType.PIECE_DESTROYED)
    this.piece = piece
  }
}
