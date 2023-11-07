import MenuChild from './Popper/MenuChild';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <MenuChild data={data}>
      <NavLink className={(nav) => cx('menu-item', { active: nav.isActive && data.to })} to={data.to}>
        <span className={cx('title')}>{data.title}</span>
        {data.icon}
      </NavLink>
    </MenuChild>
  );
}

export default MenuItem;
