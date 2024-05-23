import styles from './index.less';
// 告诉 umi 编译这个 less
// 添加样式
const AddStyle = () => {
  return (
    <>
      <h1>添加样式</h1>
      <p className={styles.red}>这个字将会变成红色</p>
      <a href="https://pro.ant.design/zh-CN/docs/less" target="_blank">
        {' '}
        pro.ant.design less 使用文档
      </a>
    </>
  );
};

export default AddStyle;
