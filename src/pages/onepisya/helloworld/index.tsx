// 创建和嵌套组件
function MyButton() {
  /*
  禁止未转义的 HTML 实体出现在标记中
  这些需要转义
    > can be replaced with &gt;
    " can be replaced with &quot;, &ldquo;, &#34; or &rdquo;
    ' can be replaced with &apos;, &lsquo;, &#39; or &rsquo;
    } can be replaced with &#125;
  */
  return <button type="button">I&apos;m a button</button>;
}

const HelloWorld = () => {
  return (
    <>
      <h1>创建和嵌套组件</h1>
      <div>Hello World</div>
      <MyButton />
    </>
  );
};

export default HelloWorld;
