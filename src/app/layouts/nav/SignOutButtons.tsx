import { MenuItem, Button } from "semantic-ui-react";

export default function SignOutButtons() {
  return (
    <MenuItem position="right">
    <Button basic inverted={true} content='Login' />
    <Button basic inverted={true} content='Register' style={{ marginLeft: "1rem" }} />
  </MenuItem>
  )
}