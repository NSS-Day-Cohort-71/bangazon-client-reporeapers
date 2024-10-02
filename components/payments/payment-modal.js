import { useRef } from "react"
import { Input } from "../form-elements"
import Modal from "../modal"

export default function AddPaymentModal({ showModal, setShowModal, addNewPayment }) {
  const merchantNameInput = useRef()
  const acctNumInput = useRef()
  const exDateInput = useRef()
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="Add New Payment Method">
      <>
        <Input
          id="merchantName"
          type="text"
          label="Merchant Name"
          refEl={merchantNameInput}
        />
        <Input
          id="accNum"
          type="text"
          label="Account Number"
          refEl={acctNumInput}
        />
        <Input
          id="expDate"
          type="text"
          placeholder="YYYY-MM-DD"
          label="Expiration Date"
          refEl={exDateInput}
        />
      </>
      <>
        <button
          className="button is-success"
          onClick={() => addNewPayment({
            account_number: acctNumInput.current.value,
            merchant_name: merchantNameInput.current.value,
            create_date: new Date().toISOString().split('T')[0],
            expiration_date: exDateInput.current.value
          })}
        >Add Payment Method</button>
        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
      </>
    </Modal>
  )
}
