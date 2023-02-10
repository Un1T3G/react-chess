import { ChessEvent } from "./events/cellEvent"

export class EventEmitter<T> {
  private listeners: { [event: string]: ((event: T) => void)[] } = {}

  on(event: string, listener: (event: T) => void) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(listener)
  }

  emit(event: string, eventData: T) {
    ;(this.listeners[event] || []).forEach((listener) => listener(eventData))
  }
}
