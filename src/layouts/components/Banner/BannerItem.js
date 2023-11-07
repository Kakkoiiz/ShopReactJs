import classNames from "classnames/bind";
import style from './Banner.module.scss'

const cx = classNames.bind(style)

function BannerItem({ icon, title, description }) {
    return (<div className={cx('banner-item')}>
        {icon && <span className={cx('icon')}>{icon}</span>}
        <div className={cx('content')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </div>
    </div>);
}

export default BannerItem;