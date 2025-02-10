// import MenuItem from "../MenuItem"
// //in the actual project we will pass the data in using props 

import Menu from "../Menu"

const MenuApp = ({ data }) => {
    console.log("data I have: ", data);
  return (
    <div className="App">
      <Menu
        menuName="Breakfast"
        menuItems={data}
      ></Menu>
    </div>
  )
}
export default MenuApp