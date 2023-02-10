import { Game } from '../models/game'
import { ColorType } from '../types/colorType'
import { AppState } from './appState'

export const appInitialState = {
  currentTurn: ColorType.WHITE,
  game: new Game(),
  selectedCell: undefined,
  availableCells: [],
} as AppState
