import { Cell } from './cell'

export class Board {
  private readonly _cells: Cell[][]

  constructor() {
    this._cells = []

    for (let i = 0; i < 8; i++) {
      this._cells.push([])
      for (let j = 0; j < 8; j++) {
        this._cells[i].push(new Cell(j, i, this))
      }
    }
  }

  public get cells(): Cell[][] {
    return this._cells
  }

  public get getCopy(): Board{
    const board = new Board()

    for (let i = 0; i < 8; i++){
      for (let j = 0; j < 8; j++){
        board.cells[i][j].piece = this._cells[i][j].piece
        
      }
    }

    return board
  }
}
