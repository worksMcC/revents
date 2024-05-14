import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignOutButtons from "./SignOutButtons";
import SignedInMenu from "./SignedInMenu";



export default function NavBar() {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
      <MenuItem header as={NavLink} to='/'>

        <img src="/logo.png" alt="logo" />
        Re-Vents/
      </ MenuItem>
      <MenuItem name="Events" as={NavLink} to='/events'/>
      <MenuItem>
        <Button
          as={NavLink} 
          to='/createEvent'
          floated="right"
          positive={true}
          inverted={true}
          content='Create Event' />
      </MenuItem>
       <SignedInMenu />
      </Container>
    </Menu>
  )
}
