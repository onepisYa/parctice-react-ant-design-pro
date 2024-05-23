import { useState } from 'react';
import styles from '../style.less';
import Board from './board';
import type { SquareValue } from './square';

export default function Game() {
  const [history, setHistory]:[history:SquareValue[][], setHistory: (history:SquareValue[][]) => void] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // currentMove 跟踪用户当前正在查看的步骤

  // const [xIsNext, setXIsNext] = useState(true);
  // 因为 xIsNext 始终可以计算出来、所以为了避免冗余的 state、进行简化。
  const xIsNext = currentMove % 2 === 0;

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  // 修改 Game 组件以渲染当前选定的着法，而不是始终渲染最后的着法：

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // 总的移动历史
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);// 设置下一个玩家是 X 的 flag 值
  }

  function jumpTo(nextMove:number) {
      setCurrentMove(nextMove);
      // setXIsNext(nextMove % 2 === 0);
  }
  // 步骤数组
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });



  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameInfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
