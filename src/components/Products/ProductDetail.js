import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import HighlightedQuote from './HighlightedProduct';


const QuoteDetail = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
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
            price: responseData[key].price,
            img: responseData[key].img
          });
        }
  
        setProducts(loadedProducts);
      }
      fetchProducts();
    }, []);
    
    const quote = products.find(quote => quote.id === params.quoteId);
    if(!quote){
        return <p>No quote found</p>;
    }
    return (
    <Fragment>
    <HighlightedQuote name={quote.name} description={quote.description} price={quote.price} img={quote.img} />
    </Fragment>
    )
}

export default QuoteDetail;