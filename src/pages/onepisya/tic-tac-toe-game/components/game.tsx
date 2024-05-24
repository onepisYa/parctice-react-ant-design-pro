import { useState } from 'react';
import styles from '../style.less';
import Board from './board';
import type { SquareValue } from './square';

export default function Game() {
  const [history, setHistory]: [
    history: SquareValue[][],
    setHistory: (history: SquareValue[][]) => void,
  ] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // currentMove 跟踪用户当前正在查看的步骤

  let [isOrderByAsc, setIsOrderByAsc] = useState(true);

  // const [xIsNext, setXIsNext] = useState(true);
  // 因为 xIsNext 始终可以计算出来、所以为了避免冗余的 state、进行简化。
  const xIsNext = currentMove % 2 === 0;

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  // 修改 Game 组件以渲染当前选定的着法，而不是始终渲染最后的着法：
  const [cellHistory, setCellHistory] = useState([Array(9).fill(null)]);

  function handlePlay({
    nextSquares,
    cell,
  }: {
    nextSquares: SquareValue[];
    cell: [number, number];
  }) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // 重新设置了、 也就是说一旦晦棋之后、再次下棋、那么后面的着手都不再保留
    setHistory(nextHistory); // 总的移动历史、
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);// 设置下一个玩家是 X 的 flag 值
    if (cellHistory) setCellHistory([...cellHistory.slice(0, currentMove + 1), cell]);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  // 步骤数组
  const moves = history.map((squares, move) => {
    // 升序
    let description;
    if (move > 0) {
      description = 'Go to move #' + move + ' cell:' + JSON.stringify(cellHistory[move]);
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  console.log('game');
  console.log('styles', styles);

  return (
    <>
      <div className={styles['tec-tac-toe']}>
        <h1>You are at move #{currentMove}</h1>
        <div className={styles.game}>
          <div className={styles['game-board']}>
            <Board
              currentMove={currentMove}
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className={styles['game-info']}>
            <ol>
              <li>
                <button
                  onClick={() => {
                    setIsOrderByAsc(!isOrderByAsc);
                  }}
                  type="button"
                >
                  {isOrderByAsc ? '倒序' : '正序'}
                </button>
              </li>
              {isOrderByAsc ? moves : moves.reverse()}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
