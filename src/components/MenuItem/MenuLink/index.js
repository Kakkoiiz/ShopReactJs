import React, { useState } from 'react';
import MenuChild from './Popper/MenuChild';
import Button from '~/components/Button';
import styles from './MenuLink.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuLink({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MenuChild data={data}>
      <li 
        className={cx('menu-item')}
      >
        <Button
          link
          to={`${data.to}`}
          rightIcon={data.icon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={cx('menu-title', { active: isHovered })}>
            {data.title}
          </span>
        </Button>
      </li>
    </MenuChild>
  );
}

export default MenuLink;
