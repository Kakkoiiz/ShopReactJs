
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import Slide from './Slide/Slide';


const cx = classNames.bind(styles);

const SLIDE_ITEMS = [
  {
    id: '1',
    prefix: 'LARGEST CATALOG',
    title: 'Over 12 Milion Books',
    description: 'Start your learning journey by browsing Milions of books from our library',
    button: 'Explore Now',
    image: 'https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/11/reading-books.png',
  },
  {
    id: '2',
    prefix: 'SEARCH BOOKS EASILY',
    title: 'ISBN Search Feature',
    description: 'Search books using ISBN numbers or Author names and save your time',
    button: 'Explore Now',
    image: 'https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-searching-online.png',
  },
  {
    id: '3',
    prefix: 'EMBED PDF FEATURE',
    title: 'READ PDF Books Online',
    description: 'Let your customers read books online without leaving your website ',
    button: 'Read Now',
    image: 'https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-reading-books-online.png',
  },
];

function SlideShow() {
  
  return (
    <div className={cx('wrapper')}>
      <Slide items={SLIDE_ITEMS} />
    </div>
  );
}

export default SlideShow;
