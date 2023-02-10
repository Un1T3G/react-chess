import { Cell } from "../../models/cell"

export interface ChangeSelectedCell{
    type: 'CHANGE_SELECTED_CELL'
    selectedCell?: Cell
}