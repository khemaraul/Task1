import classes from './HighlightedProduct.module.css';
// import assets from '../../images';


const HighlightedQuote = (props) => {
  return (
    <div className={classes.product}>
      <img src={process.env.PUBLIC_URL + `/images/${props.img}.jpg`} alt=""/>
      <figure>
      <p>{props.name}</p>
      <figcaption>{props.description}</figcaption>
      <h2>RS.{props.price}</h2>
      <button>Add To Cart</button>
      {/* <img src={assets} alt='A table full of delicious food!' /> */} 
    </figure>
    </div>
  );
};

export default HighlightedQuote;
