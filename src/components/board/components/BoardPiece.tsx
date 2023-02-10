import { getPieceImage } from "../../../helpers/getPieceImage"
import { Piece } from "../../../models/piece"

interface IProps{
  piece: Piece
}

const BoardPiece = ({piece} : IProps) => {
  return <img src={getPieceImage(piece.color, piece.type)} alt="piece" />
}

export default BoardPiece
