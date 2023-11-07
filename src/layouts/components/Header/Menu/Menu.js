import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
  
  return (
    <div className={cx('menu-main')}>
      {items.map((item, index) => (
        <MenuItem key={index} data={item} />
      ))}
    </div>
  );
}

export default Menu;
