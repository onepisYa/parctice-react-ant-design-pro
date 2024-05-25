import classNames from 'classnames';
import styles from '../style.less';
export type SquareValue = 'X' | 'O' | null;

console.log(styles);

export default function Square({
  value,
  onSquareClick,
  isWin,
}: {
  value: SquareValue;
  onSquareClick: () => void;
  isWin: boolean;
}) {
  const cls = isWin ? classNames(styles.square, styles.win) : styles.square;
  return (
    <button onClick={onSquareClick} className={cls}>
      {value}
    </button>
  );
}
