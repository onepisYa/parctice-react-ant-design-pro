/*
  该组件尝试在午夜到早上 6 点期间，将 <h1> 的 CSS 类设置为 "night"，而在其他时间都设置为 "day"。但它不起作用。你能修复这个组件吗？
  你可以临时更改计算机的时区来验证你的解决方案是否有效。当前时间位于午夜至早上六点之间时，时钟应该有相反的颜色！
 */
export default function Clock({ time }: { time: Date }) {
  let hours = time.getHours();
  // ❌ 这个时候 还没有渲染、当然无法获取到 h1#time 元素、所以会报错。

  if (hours >= 0 && hours <= 6) {
    document.getElementById('time').className = 'night';
  } else {
    document.getElementById('time').className = 'day';
  }

  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}
