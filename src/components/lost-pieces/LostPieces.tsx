import styles from './LostPieces.module.css'
import { ColorType } from '../../types/colorType'
import { Piece } from '../../models/piece'
import Card from '../../ui/card/Card'
import LostPiecesList from './components/LostPiecesList'

interface IProps {
  lostPieces: Piece[]
}

const LostPieces = ({ lostPieces }: IProps) => {
  return (
    <Card className={styles.lost_pieces}>
      <div className={styles.lost_pieces__column}>
        <div className={styles.lost_pieces__label}>Black</div>
        <LostPiecesList lostPieces={lostPieces} color={ColorType.WHITE} />
      </div>
      <div className={styles.lost_pieces__column}>
        <div className={styles.lost_pieces__label}>Black</div>
        <LostPiecesList lostPieces={lostPieces} color={ColorType.BLACK} />
      </div>
    </Card>
  )
}

export default LostPieces
