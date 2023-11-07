import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleXmark, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from './Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: 'HOME',
    to: '/#',
  },
  {
    title: 'MEGA MENU',
    icon: <FontAwesomeIcon icon={faAngleDown} />,
    children: [
      {
        data: [
          {
            code: 'header',
            title: 'TEXT BOOKS',
          },
          {
            code: 'business',
            title: 'Business',
          },
          {
            code: 'Encyclopedias',
            title: 'Encyclopedias',
          },
          {
            code: 'Lifestyle',
            title: 'Lifestyle',
          },
          {
            code: 'Foods & Cookery',
            title: 'Foods & Cookery',
          },
          {
            code: 'Fantasy',
            title: 'Fantasy',
          },
        ],
      },
      {
        data: [
          {
            code: 'header',
            title: 'KINDLE BOOKS',
          },
          {
            code: 'Architecture',
            title: 'Architecture',
          },
          {
            code: 'Biography',
            title: 'Biography',
          },
          {
            code: 'Music',
            title: 'Music',
          },
          {
            code: 'Wildlife',
            title: 'Wildlife',
          },
          {
            code: 'Cooking',
            title: 'Cooking',
          },
        ],
      },
      {
        data: [
          {
            code: 'header',
            title: 'PAGES',
          },
          {
            code: 'About Us',
            title: 'About Us',
          },
          {
            code: 'Contact Us',
            title: 'Contact Us',
          },
          {
            code: 'Privacy Policy',
            title: 'Privacy Policy',
          },
          {
            code: 'Refund and Returns Policy',
            title: 'Refund and Returns Policy',
          },
          {
            code: 'Terms and Conditions',
            title: 'Terms and Conditions',
          },
          
        ],
      },
    ],
  },
  {
    title: 'SHOP',
    icon: <FontAwesomeIcon icon={faAngleDown} />,
    to: '/shop',
    children: [
      {data: [
        {
          code: 'simple product',
          title: 'Simple Product',
          to: '/shop'
        },
        {
          code: 'Read PDF Book Demo',
          title: 'Read PDF Book Demo',
          to: '/shop'
        },
        {
          code: 'Variable (DVD/Kindle/Paper)',
          title: 'Variable (DVD/Kindle/Paper)',
          to: '/shop'
        },
        {
          code: 'External Product',
          title: 'External Product',
          to: '/shop'
        },
        {
          code: 'Free Download Product',
          title: 'Free Download Product',
          to: '/shop'
        },
        {
          code: 'Bundled Product',
          title: 'Bundled Product',
          to: '/shop'
        },
        {
          code: 'Author Profile Page',
          title: 'Author Profile Page',
          to: '/shop'
        },
        {
          code: 'Publisher Profile Page',
          title: 'Publisher Profile Page',
          to: '/shop'
        },
      ],},
    ],
  },
  {
    title: 'BLOG',
    to: '/blog',
  },
  {
    title: 'PAGES',
    icon: <FontAwesomeIcon icon={faAngleDown} />,
    children: [
      {data: [
        {
          code: 'About Us',
          title: 'About Us',
          to: '/blog'
        },
        {
          code: 'Read PDF Book Demo',
          title: 'Read PDF Book Demo',
          to: '/blog'
        },
        {
          code: 'Publisher Profile Page',
          title: 'Publisher Profile Page',
          to: '/blog'
        },
        {
          code: 'All Authors Page',
          title: 'All Authors Page',
          to: '/blog'
        },
        {
          code: 'All Book Publishers',
          title: 'All Book Publishers',
          to: '/blog'
        },
      ],},
    ],
  },
  {
    title: 'CONTACT US',
    to: '/contact',
  },
];

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(true);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img className={cx('logo-img')} src={images.logo} alt="Bookstore" />
        </div>
        <div className={cx('site-wrap')}>
          {isSearchVisible ? (
            <div className={cx('search')}>
              <input placeholder='Search by Title, Category or ISBN' spellCheck={false} />
              <button className={cx('close')} onClick={closeSearch}>
                <FontAwesomeIcon icon={faCircleXmark}/>
              </button>
            </div>
          ) : <Menu items={MENU_ITEMS} />}
        </div>
        <div className={cx('action')}>
          <Button primary enlarge>
            <FontAwesomeIcon icon={faUser} />
          </Button>
          <Button search enlarge onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
