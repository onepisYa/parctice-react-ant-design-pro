/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-12 18:19:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-12 19:59:58
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/product-page/ProductPage.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useCallback } from 'react';
import styles from '../../styles.less';
import ShippingForm from './ShippingForm';

export type OrderDetails = {
  city: string;
  count: number;
  street: string;
  zipCode: string;
};

export type ProductForm = {
  orderDetails: OrderDetails;
  referrer: string;
};

function post(url: string, data: ProductForm) {
  // 想象这发送了一个请求
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
  // ✅  使用 useCallBack 传递 方法给 子组件
  const handleSubmit = useCallback(
    (orderDetails: OrderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer],
  );

  return (
    <div className={styles[theme]}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
