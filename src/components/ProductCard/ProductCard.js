import classNames from 'classnames/bind';
import style from './ProductCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';


const cx = classNames.bind(style);

function ProductCard({data}) {
   return (
    <div className={cx('wrapper')}>
      <div className={cx('product-img')}>
        <Image
          className={cx('image')}
          src={data.image}
          alt="product img"
        />
        {data.discount && <div className={cx('discount')}>-{data.discount}%</div>}
        <div className={cx('product-btns')}>
          <Button><FontAwesomeIcon icon={faEye}/></Button>
          <Button><FontAwesomeIcon icon={faShareFromSquare}/></Button>
          <Button><FontAwesomeIcon icon={faHeart}/></Button>
          <Button><FontAwesomeIcon icon={faCartShopping}/></Button>
        </div>
      </div>
      <div className={cx('product-content')}>
        <div className={cx("category")}>{data.category}</div>
        <h3 className={cx("name")}>{data.name}</h3>
        <div className={cx("authors")}>{data.authors}</div>
        <div className={cx("price")}>${data.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
