import classNames from "classnames/bind";
import style from './BookHeading..module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(style)

function Discount({prefix, title, description}) {
    return ( <div className={cx('wrapper')}>
        <div className={cx('header')} >
            <Button primary medium  className={cx('prefix')}>{prefix}</Button>
            <div className={cx('title')} >{title}</div>
            <span className={cx('description')}>{description}</span>
        </div>
    </div> );
}

export default Discount;