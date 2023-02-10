import Button from '../../ui/button/Button'
import Card from '../../ui/card/Card'
import styles from './Actions.module.css'

interface IProps{
    onClickRestart: VoidFunction
    onClickBack?: VoidFunction
}

const Actions = ({onClickRestart, onClickBack} : IProps) => {
  return (
    <Card className={styles.actions}>
      <Button className={styles.actions__btn} label="Restart" onClick={onClickRestart} />
      <Button className={styles.actions__btn} label="Back" onClick={onClickBack} />
    </Card>
  )
}

export default Actions
