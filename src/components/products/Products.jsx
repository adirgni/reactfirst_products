import Product from '../product/Product'
import products from '../../data/data'
import './Products.css'

const Products = () => {
  console.log(products);

  return (
    <div className='products_father'>
      <h2>Product List</h2>
      <Product products={products} />
    </div>
  )
}

export default Products