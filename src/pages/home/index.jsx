import Layout from '../../components/layout';
import Hero from '../../components/hero';
import MainSection from '../../components/main-section';
import FeaturedProductsList from '../../components/featured-products-list';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedProductsList />
      </Layout>
    </>
  );
}

export default HomePage;
