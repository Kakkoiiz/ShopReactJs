import classNames from 'classnames/bind';
import style from './Banner.module.scss';
import BannerItem from './BannerItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Banner() {
  return (
    <div className={cx('wrapper')}>
      <BannerItem
        icon={<FontAwesomeIcon icon={faBook} />}
        title={'12 Million Books'}
        description={'Read millions of books online'}
      />
      <BannerItem
        icon={<FontAwesomeIcon icon={faTruckFast} />}
        title={'Free Shipping'}
        description={'For orders $50 and above'}
      />
      <BannerItem
        icon={<FontAwesomeIcon icon={faWallet} />}
        title={'30 Days Returns'}
        description={'Simple refund policy'}
      />
    </div>
  );
}

export default Banner;
