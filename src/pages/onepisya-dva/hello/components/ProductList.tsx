/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 09:45:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-17 11:13:15
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/components/ProductList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Button, Popconfirm, Table } from 'antd';
import PropTypes from 'prop-types';
import type { Product } from '../models/product';

const ProductList = ({
  onDelete,
  products,
}: {
  onDelete: (id: Product['id']) => void;
  products: Product[];
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: any, record: Product) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

// 在 js 中对 react 的 Props 进行类型处理
ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
