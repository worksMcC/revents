import { Button, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted={true} fixed="top">
        <MenuItem header> 
       
        <img src="/logo.png" alt="logo" />
        Re-Vents/
        </ MenuItem>
        <MenuItem name="Events" />
        <MenuItem>
          <Button floated="right" positive={true} inverted={true} content='Create Event' />
        </MenuItem>
        <MenuItem position="right">
        <Button basic inverted={true} content='Login' />
        <Button basic inverted={true} content='Register' style={{marginLeft: "1rem"}} />
        </MenuItem>
    </Menu>
  )
}
