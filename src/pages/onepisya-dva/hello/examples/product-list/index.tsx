/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 09:45:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 13:30:02
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/product-list/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// import { connect } from 'dva';
import { connect } from 'umi';
import ProductList from '../../components/ProductList';
import { Product } from '../../models/product';

const Products = ({ dispatch, products }: { dispatch: any; products: Product[] }) => {
  function handleDelete(id: number) {
    // 调用 dispatch 触发 action
    // 调用的是 命名空间 products 中 的 delete 方法
    // 传递一个 id
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(
  ({
    products,
  }: {
    products: Product[];
    // 从 redux 中获取 products
  }) => ({
    products: products, // return products
    // 可以在这里进行重映射
    // 比如 a:products 这样在 Products 组件中拿到的则是 改名为 a 的 products 里面的 state
  }),
)(Products);
