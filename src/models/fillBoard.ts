import { Cell } from './cell'
import { ColorType, getDirection } from '../types/colorType'
import { BishopPiece } from './pieces/bishopPiece'
import { KingPiece } from './pieces/kingPiece'
import { KnightPiece } from './pieces/knightPiece'
import { PawnPiece } from './pieces/pawnPiece'
import { QueenPiece } from './pieces/queenPiece'
import { RookPiece } from './pieces/rookPiece'

const data = [
  {
    y: 0,
    color: ColorType.BLACK,
  },
  {
    y: 7,
    color: ColorType.WHITE,
  },
]

export const fillBoard = (board: Cell[][]): void => {
  for (const { y, color } of data) {
    board[y][0].piece = new RookPiece(board[y][0], color)
    board[y][1].piece = new KnightPiece(board[y][1], color)
    board[y][2].piece = new BishopPiece(board[y][2], color)
    board[y][3].piece = new QueenPiece(board[y][3], color)
    board[y][4].piece = new KingPiece(board[y][4], color)
    board[y][5].piece = new BishopPiece(board[y][5], color)
    board[y][6].piece = new KnightPiece(board[y][6], color)
    board[y][7].piece = new RookPiece(board[y][7], color)

    for (let i = 0; i < 8; i++) {
      board[y + getDirection(color)][i].piece = new PawnPiece(
        board[y + getDirection(color)][i],
        color
      )
    }
  }
}
