/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-24 20:55:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:53:28
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/react-phd/state-react-phd/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// 教程 https://react.dev/learn/thinking-in-react
// 教程中的第三到第五步
import { useState } from 'react';
import { CategoryEnum, Product } from '../react-phd-type';
import styles from '../style.less';
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onInStockOnlyChange: (value: boolean) => void;
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
}
function ProductCategoryRow({ category }: { category: CategoryEnum }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}) {
  const rows: JSX.Element[] = [];
  let lastCategory: CategoryEnum;

  products.forEach((product: Product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className={styles['react-phd']}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

const PRODUCTS = [
  { category: CategoryEnum.Fruits, price: '$1', stocked: true, name: 'Apple' },
  { category: CategoryEnum.Fruits, price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: CategoryEnum.Fruits, price: '$2', stocked: false, name: 'Passionfruit' },
  { category: CategoryEnum.Vegetables, price: '$2', stocked: true, name: 'Spinach' },
  { category: CategoryEnum.Vegetables, price: '$4', stocked: false, name: 'Pumpkin' },
  { category: CategoryEnum.Vegetables, price: '$1', stocked: true, name: 'Peas' },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
