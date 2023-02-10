import { Cell } from "../models/cell";
import { Game } from "../models/game";
import { ColorType } from "../types/colorType";

export interface AppState{
    currentTurn: ColorType
    game: Game
    selectedCell?: Cell
    availableCells: Cell[]
}