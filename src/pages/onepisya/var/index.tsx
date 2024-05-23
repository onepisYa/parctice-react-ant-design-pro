import styles from './style.less';

const UsingVar = () => {
  const user = {
    name: '小明',
    imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    imageSize: 48,
  };

  return (
    <>
      <h1>显示变量中的数据</h1>
      <div>this is a variable user.name : {user.name}</div>
      {/* jsx tsx 标签中注释的写法 */}
      {/*在作用域内、其实直接这样写也可以、
    但是我们使用了 umi 这套 css modules、所以需要导入样式
  className="avatar" */}
      <p>{user.name}</p>
      {/* 字符拼接 */}
      <img
        className={styles.avatar}
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
};
export default UsingVar;
