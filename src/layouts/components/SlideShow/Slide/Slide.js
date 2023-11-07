import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Slide.module.scss';
import SlideItem from './SlideItem';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slide({ items = [] }) {
  const [slide, setSlide] = useState(0)
  const lengthItems = items.length - 1
  const nextSlide = () => {
    setSlide(slide === lengthItems ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? lengthItems : slide - 1)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={cx('content')}>
      {items.map((item, index) => (
        <SlideItem key={index} data={item} index={index} slide={slide}/>
      ))}
  
      <Button slideIcon className={cx('prev')} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button slideIcon className={cx('next')} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  );
}

export default Slide;
