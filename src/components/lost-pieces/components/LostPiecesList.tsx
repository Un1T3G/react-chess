import { ColorType } from '../../../types/colorType'
import { Piece } from '../../../models/piece'
import LostPiecesItem from './LostPiecesItem'
import styles from '../LostPieces.module.css'

interface IProps {
  lostPieces: Piece[]
  color: ColorType
}

const LostPiecesList = ({ lostPieces, color }: IProps) => {
  return (
    <ul className={styles.lost_pieces__list}>
      {lostPieces
        .filter((e) => e.color === color)
        .map((e) => (
          <LostPiecesItem key={e.color + ' ' + e.type} piece={e} />
        ))}
    </ul>
  )
}

export default LostPiecesList
