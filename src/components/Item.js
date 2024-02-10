import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false);


// Item changes on btn click
const itemAddedToCart = inCart ? 'in-cart' : null;

// Button changes (cart btn) 
const buttonText = inCart ?  'Remove From Cart' :'Add to cart';
  
function handleOnClick(e) {    
    
    inCart? setInCart(false) : setInCart(true);

  }
  return (
    <li className={itemAddedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={(e)=>handleOnClick(e)}>{buttonText}</button>
    </li>
  );
}

export default Item;
