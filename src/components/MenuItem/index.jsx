import React from "react"

//we will pass an object and assign it to the item prop here later 
//now i need to figure out how to map correctly 

const MenuItem = ({item }) => {
return(
       <div>
          <p>${item.itemPrice}</p>
          <h1>{item.itemName}</h1>
          <p>{item.itemDescription}</p>
          <button>Add to Cart</button>
       </div>
);
}

export default MenuItem;