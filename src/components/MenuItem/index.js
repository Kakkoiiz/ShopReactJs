import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import MenuLink from './MenuLink';

const cx = classNames.bind(styles);

function MenuItem({ items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => 
      <MenuLink key={index} data={item} />
      );
    };

  return <ul className={cx('menu-main')}>{renderItems()}</ul>;
}

export default MenuItem;
