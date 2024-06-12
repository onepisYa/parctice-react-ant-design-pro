/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 01:07:20
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 01:54:08
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/updating-state-from-a-memoized-callback/ProductPage.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import styles from '../../styles.less';
import type {
  OrderDetails,
  ProductForm,
} from '../skipping-re-rendering-with-useCallback-and-memo/ProductPage';
import ShippingForm from './ShippingForm';

function post(url: string, data: ProductForm) {
  //想象这发送了一个请求
  console.log('POST /' + url);
  console.log(data);
}

export default function ProductPage({
  productId,
  referrer,
  theme,
}: {
  productId: number;
  referrer: string;
  theme: string;
}) {
  function handleSubmit(orderDetails: OrderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  return (
    <div className={styles[theme]}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
