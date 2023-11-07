import classNames from 'classnames/bind';
import styles from './SlideItem.module.scss';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function SlideItem({ data, index, slide }) {

  return <div className={cx('slide-item', slide === index ? '' : 'hidden')}>
    <div className={cx('left-content')}>
      <div className={cx('wrapper')}>
        <Button primary className={cx('prefix')}>{data.prefix}</Button>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('description')}>{data.description}</div>
        <Button sliderBtn className={cx('slider-btn')}>{data.button}</Button>
      </div>
    </div>
    <div className={cx('right-content')}>
      <img className={cx('image')} src={data.image} alt='img'/>
    </div>
  </div>;
}

export default SlideItem;
