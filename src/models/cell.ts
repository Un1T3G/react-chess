import { ChessEventType } from '../types/chessEventType'
import { Board } from './board'
import { PieceDestroyedEvent } from './events/pieceDestroyedEvent'
import { PieceMovedEvent } from './events/pieceMovedEvent'
import { GlobalChessEvent } from './globalChessEvent'
import { Piece } from './piece'

export class Cell {
  public readonly x: number
  public readonly y: number
  public readonly board: Board
  public piece?: Piece

  constructor(x: number, y: number, board: Board) {
    this.x = x
    this.y = y
    this.board = board
  }

  public get id(): number {
    return this.x + this.y * 8
  }

  public get isEmpty(): boolean {
    return this.piece === undefined
  }

  public movePiece(target: Cell): void {
    if (target.piece) {
      GlobalChessEvent.chess.emit(
        ChessEventType.PIECE_DESTROYED,
        new PieceDestroyedEvent(target.piece)
      )
    }

    GlobalChessEvent.chess.emit(
      ChessEventType.PIECE_MOVED,
      new PieceMovedEvent(this, target)
    )

    target.piece = this.piece
    target.piece!.cell = target

    this.piece = undefined
  }
}
