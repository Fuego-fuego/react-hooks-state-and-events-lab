import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedcategory] = useState('All');


 
  function handleOnChange (e){

    setSelectedcategory(e.target.value);
  }

  const ItemsToDisplay = items.filter( (item) =>{ 
    
    if( selectedCategory === 'All'){
      return item;
    }    
   return  item.category === selectedCategory})
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={(e)=>{handleOnChange(e)}} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
