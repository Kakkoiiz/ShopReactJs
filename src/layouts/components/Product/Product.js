import classNames from 'classnames/bind';
import style from './Product.module.scss';
import ProductCard from '~/components/ProductCard';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function Product({ discount, newBook }) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/book`)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        {discount
          ? book.slice(-4).map((result) => <ProductCard key={result.id} data={result} />)
          : (newBook
              ? book.slice(0, 4).map((result) => <ProductCard key={result.id} data={result} />)
              : book.map((result) => <ProductCard key={result.id} data={result} />)
            )
        }
      </div>
    </div>
  );
}

export default Product;
