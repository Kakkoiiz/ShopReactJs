import MenuChild from './Popper/MenuChild';
import Button from '~/components/Button';
import styles from './MenuLink.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuLink({ data, onMouseEnter }) {

  return (
    <MenuChild data={data}>
      <li 
        className={cx('menu-item')}

      >
        <Button link to={`${data.to}`} rightIcon={data.icon} onMouseEnter={onMouseEnter}>
          {data.title}
        </Button>
      </li>
    </MenuChild>
  );
}

export default MenuLink;
