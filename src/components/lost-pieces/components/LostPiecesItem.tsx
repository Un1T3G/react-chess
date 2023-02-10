import { getPieceImage } from '../../../helpers/getPieceImage'
import { Piece } from '../../../models/piece'
import styles from '../LostPieces.module.css'

interface IProps {
  piece: Piece
}

const LostPiecesItem = ({ piece }: IProps) => {
  return (
    <li className={styles.lost_pieces__item}>
      <img src={getPieceImage(piece.color, piece.type)} alt="piece" />
      <div className={styles.lost_pieces__item__name}>{piece.type}</div>
    </li>
  )
}

export default LostPiecesItem
