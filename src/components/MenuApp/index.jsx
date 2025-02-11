// import MenuItem from "../MenuItem"
// //in the actual project we will pass the data in using props 

import Menu from "../Menu"

const MenuApp = ({ data }) => {
    console.log("data I have: ", data);
  return (
    <div className="App">
      {data.map((menu, index) => (
        <Menu
        key = {index}
        menuName = {menu.menuName}
        menuItems = {menu.menuItems}
        />
      ))}
    </div>
  )
}
export default MenuApp