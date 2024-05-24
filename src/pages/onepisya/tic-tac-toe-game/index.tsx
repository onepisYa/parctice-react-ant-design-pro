// 教程 https://react.dev/learn/tutorial-tic-tac-toe
// 其他练习
// ✅ 1. 仅针对当前着手，显示“You are at move #…”而不是按钮。
// ✅ 2. 重写 Board 以使用两个循环来制作方块而不是对它们进行硬编码。
// ✅ 3. 添加一个切换按钮，使可以按升序或降序对落子的步数进行排序。asc升序/ desc降序
// ✅ 4. 当有人获胜时，突出显示致使获胜的三个方块（当没有人获胜时，显示一条关于结果为平局的消息）。
// ✅ 5. 在“落子”的历史列表中以 [row, col] 格式显示每步的位置。

import Game from './components/game';

export default function TicTacToeGame() {
  return <Game />;
}