import { EventEmitter } from './eventEmitter'
import { ChessEvent } from './events/cellEvent'

export class GlobalChessEvent {
  public static chess: EventEmitter<ChessEvent> = new EventEmitter<ChessEvent>()
}
