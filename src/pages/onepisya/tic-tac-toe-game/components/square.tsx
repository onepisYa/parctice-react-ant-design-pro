import styles from '../style.less';

export type SquareValue = 'X' | 'O' | null;
export default function Square({
  value,
  onSquareClick,
}: {
  value: SquareValue;
  onSquareClick: () => void;
}) {
  return (
    <button onClick={onSquareClick} className={styles.square}>
      {value}
    </button>
  );
}
