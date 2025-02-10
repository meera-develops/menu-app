import React from "react"
import MenuItem from "../MenuItem"


export default class Menu extends React.Component {
  render() {
      console.log("Props I have: ", this.props);
    return (
      <div>
        <h1>{this.props.menuName} Menu</h1> 
      {this.props.menuItems.map(item => {
        return <MenuItem key={item.itemId} item={item} />
      })}
      </div>
      )
    }
  }