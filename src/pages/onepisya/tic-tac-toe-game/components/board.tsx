import { useMemo } from 'react';
import type { SquareValue } from '../components/square';
import Square from '../components/square';
import styles from '../style.less';

function calculateWinner(squares: SquareValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], // 井字棋、连在一起为胜
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}) {
  /*
    这两个现在移动到 Game 组件中
    const [squares, setSquares]: [SquareValue[], Dispatch<SetStateAction<SquareValue[]>>] = useState(
      Array(9).fill(null),
    );
    // 格子数据
    const [xIsNext, setXIsNext] = useState(true);
    // 落子
  */
  const winner = useMemo(() => {
    console.log('useMemo run');
    return calculateWinner(squares);
  }, squares);
  // 把胜者计算放到 memo 中、只要 squares 没有变化那么就不会重新计算
  // 虽然没有什么用、但作为一个演示。

  function handleClick(index: number) {
    // 创建一个副本
    const nextSquares = squares.slice();
    if (squares[index] || winner) {
      // 提前返回、如果 squares 中不是 null
      return;
    }
    // 修改副本
    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    /*
      这两个逻辑移动到 Game中 的 onPlay 中了
      setXIsNext(!xIsNext);
      setSquares(nextSquares); 换成了 onPlay
      将副本覆盖原响应式数据
      不变性 很重要
      通过不直接改变（改变底层数据），你可以获得几个好处。
      避免数据直接突变可以让你保持以前版本的数据完好无损，并在以后重用它们。
      默认情况下，当父组件的 state 发生变化时，
      所有子组件都会自动重新渲染。
      这甚至包括未受变化影响的子组件。
      尽管重新渲染本身不会引起用户注意（你不应该主动尝试避免它！），但出于性能原因，你可能希望跳过重新渲染显然不受其影响的树的一部分。不变性使得组件比较其数据是否已更改的成本非常低。
      你可以在 memo API 参考 中了解更多关于 React 如何选择何时重新渲染组件的信息。
     */

    onPlay(nextSquares);
  }

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
    // 游戏结束
  } else if (winner === null) {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
