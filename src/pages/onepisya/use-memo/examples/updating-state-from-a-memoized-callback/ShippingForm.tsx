/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-13 01:07:34
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-13 01:26:57
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-memo/examples/updating-state-from-a-memoized-callback/ShippingForm.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { memo, useState } from 'react';
import { delay } from '../shared/utils';
import type { OrderDetails } from '../skipping-re-rendering-with-useCallback-and-memo/ProductPage';

const ShippingForm = memo(function ShippingForm({
  onSubmit,
}: {
  onSubmit: (orderDetails: OrderDetails) => void;
}) {
  const [count, setCount] = useState(1);

  // 手动减速
  delay('Rendering', 'ShippingForm', [], false, 500);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    } as OrderDetails;
    onSubmit(orderDetails);
  }

  return (
    <form className="block w-fit" onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <div className="flex flex-col justify-around w-fit">
        <label className="block self-end">
          Number of items:
          <button type="button" onClick={() => setCount(count - 1)}>
            –
          </button>
          {count}
          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </label>
        <label className="block self-end">
          Street:
          <input name="street" />
        </label>
        <label className="block self-end">
          City:
          <input name="city" />
        </label>
        <label className="block self-end">
          Postal code:
          <input name="zipCode" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
