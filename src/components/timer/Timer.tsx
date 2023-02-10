import styles from './Timer.module.css'
import { ColorType } from '../../types/colorType'
import Card from '../../ui/card/Card'
import { useCountdown } from './hooks/useCountdown'
import { useEffect } from 'react'

interface IProps {
  turn: ColorType
  onTimerElapsed: (color: ColorType) => void
}

const TARGET_SECONDS = 15 * 60

const Timer = ({ turn, onTimerElapsed }: IProps) => {
  const onCountdownElapsedHandler = (color: ColorType) => {
    onTimerElapsed(color)
  }

  const whiteCountdown = useCountdown(TARGET_SECONDS, () =>
    onCountdownElapsedHandler(ColorType.WHITE)
  )
  const blackCountdown = useCountdown(TARGET_SECONDS, () =>
    onCountdownElapsedHandler(ColorType.BLACK)
  )

  useEffect(() => {
    if (turn === ColorType.BLACK) {
      whiteCountdown.stop()
      blackCountdown.start()
    } else {
      blackCountdown.stop()
      whiteCountdown.start()
    }
  }, [turn])

  const display = (time: number) => {
    const minuets = Math.floor(time / 1000 / 60)
    const seconds = Math.floor(time / 1000) % 60
    return `${`${minuets}`.padStart(2, '0')}:${`${seconds}`.padStart(2, '0')}`
  }

  return (
    <Card className={styles.timer}>
      <div className={styles.timer__item}>{display(whiteCountdown.time)}</div>
      <div className={styles.turn__indicator}>
        <span>TURN</span>
        {turn}
      </div>
      <div className={styles.timer__item}>{display(blackCountdown.time)}</div>
    </Card>
  )
}

export default Timer
