import React from "react"

const MenuItem = ({item }) => {
return(
       <div id={`menu-item-${item.itemId}`}>
          <p>${item.itemPrice}</p>
          <h1>{item.itemName}</h1>
          <p>{item.itemDescription}</p>
          <button>Add to Cart</button>
          {/* uncomment the code below to display the ID */}
         {/* <p><em>ID: {`menu-item-${item.itemId}`}</em></p> */}
       </div>
);
}

export default MenuItem;