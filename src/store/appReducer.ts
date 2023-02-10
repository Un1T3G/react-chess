import { useReducer } from 'react'
import { SwapTurnAction } from './actions/swapTurnAction'
import { appInitialState } from './appInitialState'
import { ColorType } from '../types/colorType'
import { ChangeSelectedCell } from './actions/changeSelectedCell'
import { Game } from '../models/game'
import { BackAction } from './actions/backAction'
import { RestartGameAction } from './actions/restartGameAction'

type Action =
  | SwapTurnAction
  | ChangeSelectedCell
  | RestartGameAction
  | BackAction

const reducer = (state = appInitialState, action: Action) => {
  switch (action.type) {
    case 'SWAP_TURN':
      return {
        ...state,
        currentTurn:
          state.currentTurn === ColorType.BLACK
            ? ColorType.WHITE
            : ColorType.BLACK,
      }
    case 'CHANGE_SELECTED_CELL':
      return {
        ...state,
        selectedCell: action.selectedCell,
        availableCells: action.selectedCell
          ? state.game.getAvailableCells(action.selectedCell)
          : [],
      }
    case 'RESTART_GAME':
      return {
        ...state,
        game: new Game(),
      }
    case 'BACK':
      state.game.back()

      return {
        ...state,
        currentTurn:
          state.currentTurn === ColorType.BLACK
            ? ColorType.WHITE
            : ColorType.BLACK,
      }
    default:
      return state
  }
}

export const useAppReducer = () => useReducer(reducer, appInitialState)
