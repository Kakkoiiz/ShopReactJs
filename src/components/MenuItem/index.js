import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import MenuLink from './MenuLink';

const cx = classNames.bind(styles);

function MenuItem({ items = [], visible }) {
  if (!visible) {
    return null;
  }
  return (
    <ul className={cx('menu-main')}>
      {items.map((item, index) => (
        <MenuLink key={index} data={item} />
      ))}
    </ul>
  );
}

export default MenuItem;
