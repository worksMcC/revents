import { useAppSelector } from "../../app/store/store"

export default function scratch() {
 const {data} = useAppSelector( state => state.test)
  return (
    <>
    <h1>Cratch data play Page</h1>
    <h3>The Data:{ data }</h3>
    </>
  )
}