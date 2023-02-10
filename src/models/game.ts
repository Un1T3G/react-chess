import { ChessEventType } from '../types/chessEventType'
import { Board } from './board'
import { Cell } from './cell'
import { ChessEvent } from './events/cellEvent'
import { PieceDestroyedEvent } from './events/pieceDestroyedEvent'
import { fillBoard } from './fillBoard'
import { GlobalChessEvent } from './globalChessEvent'
import { Piece } from './piece'

export class Game {
  private _board: Board
  private _lostPieces: Piece[]

  private _lastBoardState?: Board

  constructor() {
    this._board = new Board()
    fillBoard(this.board.cells)
    this._lostPieces = []
    GlobalChessEvent.chess.on(
      ChessEventType.PIECE_DESTROYED,
      this.onPieceDestroyed.bind(this)
    )
    GlobalChessEvent.chess.on(
      ChessEventType.PIECE_MOVED,
      this.onPieceMoved.bind(this)
    )
  }

  private onPieceDestroyed(event: ChessEvent): void {
    this.lostPieces.push((event as PieceDestroyedEvent).piece)
  }

  private onPieceMoved(event: ChessEvent): void {
    this._lastBoardState = this.board.getCopy
  }

  public get board(): Board {
    return this._board
  }

  public get lostPieces(): Piece[]{
    return this._lostPieces
  }

  public get hasLostBoardState(): boolean {
    return this._lastBoardState !== undefined
  }

  public back(): void {
    if (!this._lastBoardState) {
      return
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = this._lastBoardState.cells[i][j].piece

        if (!piece){
          continue
        }

        piece.cell = this._lastBoardState.cells[i][j]

        this._lostPieces = this.lostPieces.filter(e => e !== piece)
      }
    }

    this._board = this._lastBoardState
    this._lastBoardState = undefined
  }

  public getAvailableCells(cell: Cell): Cell[] {
    const cells: Cell[] = []

    this.board.cells.forEach((row) =>
      row.forEach((e) => {
        if (cell.piece?.canMove(e)) {
          cells.push(e)
        }
      })
    )

    return cells
  }
}
