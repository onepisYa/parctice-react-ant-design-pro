// 教程 https://react.dev/learn/thinking-in-react
// 教程中的 第一到第二步
import { CategoryEnum, Product } from '../react-phd-type';
import styles from '../style.less';

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

function ProductTable({ products }: { products: Product[] }) {
  const rows: JSX.Element[] = [];
  let lastCategory: CategoryEnum;

  products.forEach((product: Product) => {
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

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <div className={styles['react-phd']}>
      <SearchBar />
      <ProductTable products={products} />
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
