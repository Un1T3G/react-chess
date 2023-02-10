import {
  blackBishop,
  blackKing,
  blackKnight,
  blackPawn,
  blackQueen,
  blackRook,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whitePawn,
  whiteQueen,
  whiteRook,
} from '../assets/img'
import { ColorType } from '../types/colorType'
import { PieceType } from '../types/pieceType'

export const getPieceImage = (color: ColorType, type: PieceType) => {
  switch (color) {
    case ColorType.BLACK:
      switch (type) {
        case PieceType.KING:
          return blackKing
        case PieceType.ROOK:
          return blackRook
        case PieceType.BISHOP:
          return blackBishop
        case PieceType.QUEEN:
          return blackQueen
        case PieceType.KNIGHT:
          return blackKnight
        case PieceType.PAWN:
          return blackPawn
        default:
          throw Error()
      }
    case ColorType.WHITE:
      switch (type) {
        case PieceType.KING:
          return whiteKing
        case PieceType.ROOK:
          return whiteRook
        case PieceType.BISHOP:
          return whiteBishop
        case PieceType.QUEEN:
          return whiteQueen
        case PieceType.KNIGHT:
          return whiteKnight
        case PieceType.PAWN:
          return whitePawn
        default:
          throw Error()
      }
    default:
      throw Error()
  }
}
