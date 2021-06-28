// import { useDispatch } from 'react-redux';

// import { cartActions } from '../../store/cart-slice';
import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
return (
    <li className={classes.item}>
        <figure>
          <p>{props.name}</p>
        <figcaption>{props.description}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default ProductItem;