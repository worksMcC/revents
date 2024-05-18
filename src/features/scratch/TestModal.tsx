import ModalWrapper from "../../app/common/modals/ModalWrapper";
import { useAppSelector } from "../../app/store/store";

export default function TestModal() {
    const {data} = useAppSelector(state => state.modals)
  return (
    <ModalWrapper header={'testing'}>
      <div>test data is {data}</div>
    </ModalWrapper>
  )
}