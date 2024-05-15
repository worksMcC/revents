import { MenuItem, Button } from "semantic-ui-react";

type Props ={
  setAuth: (value:boolean) => void;
}

export default function SignOutButtons({setAuth}:Props) {
  return (
    <MenuItem position="right">
    <Button onClick={()=>setAuth(true)}basic inverted={true} content='Login' />
    <Button basic inverted={true} content='Register' style={{ marginLeft: "1rem" }} />
  </MenuItem>
  )
}