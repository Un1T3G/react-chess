import { ChessEventType } from '../../types/chessEventType'

export class ChessEvent {
  type: ChessEventType

  constructor(type: ChessEventType) {
    this.type = type
  }
}

