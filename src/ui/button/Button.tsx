import styles from './Button.module.css'
import { cn } from '../../utility/cssClassUtility'

interface IProps {
  label: string
  onClick?: VoidFunction
  className?: string
}

const Button = ({ label, onClick, className }: IProps) => {
  const buttonDisabled = onClick === undefined ? styles.btn_disabled : undefined

  return (
    <button
      onClick={onClick}
      className={cn(styles.btn, undefined, buttonDisabled, className)}
    >
      {label}
    </button>
  )
}

export default Button
