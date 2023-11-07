import Banner from '~/layouts/components/Banner';
import BookHeading from '~/layouts/components/BookHeading';
import Product from '~/layouts/components/Product';
import SlideShow from '~/layouts/components/SlideShow';

function Home() {
  return (
    <>
      <SlideShow />
      <Banner />
      <BookHeading
        prefix={'Read New'}
        title={'New Arrivals'}
        description={"Reading helps you developing your communication skills"}
      />
      <Product />
    </>
  );
}

export default Home;
