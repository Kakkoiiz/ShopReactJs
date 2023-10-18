import classNames from 'classnames/bind';

import styles from './MenuChild.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuChildItem({ data }) {
    const renderItem = () => {
        return data.data.map((item, index) => {
            if (item.code === 'header') {
                return <Button href={item.to} menuItem headerMenu key={index}>{item.title}</Button>;
            } else {
                return <Button href={item.to} menuItem key={index}>{item.title}</Button>;
            }
        });
    };

  return <div className={cx('wrapper')}>{renderItem()}</div>;
}

export default MenuChildItem;
