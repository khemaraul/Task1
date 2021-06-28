import React,{ useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Card from '../UI/Card';
import classes from './Products.module.css';

// const DUMMY_PRODUCTS = [
//   {
//     id: 'p1',
//     price: 6,
//     title: 'My First Book',
//     description: 'The first book I ever wrote',
//   },
//   {
//     id: 'p2',
//     price: 5,
//     title: 'My Second Book',
//     description: 'The first book I ever wrote',
//   }
// ];



const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://products-b75af-default-rtdb.firebaseio.com/products.json');
      const responseData = await response.json();
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const loadedProducts = [];

      for(const key in responseData){
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }

      setProducts(loadedProducts);

      fetchProducts().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      })
    }
    fetchProducts();
  }, []);

  if(isLoading){
    <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
    return (
      <section className={classes.ErrorLoading}>
        <p>{httpError}</p>
      </section>
    );
  }

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (

    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <Card>
      <ul>
        {productsList}
      </ul>
      </Card>
    </section>
  );
};

export default Products;
