import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './MenuChild.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Menu/MenuItem/Popper';
import MenuChildItem from './MenuChildItem';

const cx = classNames.bind(styles);

function MenuChild({ children, data}) {
  const renderChildItems = () => {
    if (data.children) {
      return data.children.map((item, index) => <MenuChildItem key={index} data={item} />);
    }
  };
  return (
    <Tippy
      delay={[200, 0]}
      placement="bottom"
      interactive
      render={(attrs) => (
        <div className={cx('menu-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderChildItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuChild;
