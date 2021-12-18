import { useContext } from 'react';
import { ProductsContext } from '../../context/products';
import FeaturedProductComponent from '../featured-product';

const FeaturedProductsListComponent = () => {
  const { products } = useContext(ProductsContext)
  const productItems = products.slice(0, 4).map(
    (product) => <FeaturedProductComponent key={product.id} product={product} />
  )

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Collection</h2>
      <div className="products"> {productItems} </div>
    </div>
  )
}

export default FeaturedProductsListComponent;
