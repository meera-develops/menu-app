import React from "react"

//we will pass an object and assign it to the items prop here later 
//now i need to figure out how to map correctly 

const MenuItem = ({items = { itemName: "default value"} }) => {
return(
       <div>
          <h1>{items.itemName}</h1>
       </div>
);
}

export default MenuItem;