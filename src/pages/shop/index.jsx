import Layout from '../../components/layout';
import FeaturedProduct from '../../components/featured-product';
import { ProductsContext } from '../../context/products';
import { useContext } from 'react';
import './shop.styles.scss';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(
    (product) => (
      <FeaturedProduct product={product} key={product.id} />
    )
  )

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">
          {allProducts}
        </div>
      </div>
    </Layout>
  );
}

export default ShopPage;
