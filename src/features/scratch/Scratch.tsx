import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { decrement, increment, incrementByAmout } from "./testSlice"

export default function scratch() {
 const {data} = useAppSelector( state => state.test)
 const dispatch = useAppDispatch()
  return (
    <>
    <h1>Cratch data play Page</h1>
    <h3>The Data:{ data }</h3>
    <Button onClick={() => dispatch(increment())} color='green' content='Increment' />
    <Button onClick={() => dispatch(decrement())} color='red' content='Decrement' />
    <Button onClick={() => dispatch(incrementByAmout(5))} color='teal' content='increment by 5' />
  
    </>
  )
}