import styles from './Card.module.css'
import { cn } from '../../utility/cssClassUtility'

interface IProps {
  children?: JSX.Element | JSX.Element[] | string | string[]
  className?: string
}

const Card = ({ children, className }: IProps) => {
  return <div className={cn(styles.card, undefined, className)}>{children}</div>
}

export default Card
