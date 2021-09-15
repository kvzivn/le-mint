import { useState } from "react"
import styled from "styled-components"
import Modal1 from "./Modal1"
import Modal2 from "./Modal2"
import Modal3 from "./Modal3"
import Modal4 from "./Modal4"
import "./App.css"

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 100px;
  height: 52px;
  background: linear-gradient(180deg, #ef2548 0%, #c91534 100%);
  border: 1px solid #a1a1a1;
  box-sizing: border-box;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }
`

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const MODALS = {
    1: <Modal1 setShowModal={setShowModal} />,
    2: <Modal2 setShowModal={setShowModal} />,
    3: <Modal3 setShowModal={setShowModal} />,
    4: <Modal4 setShowModal={setShowModal} />,
  }

  return (
    <div className="wrapper">
      {MODALS[showModal]}

      <Buttons>
        <Button onClick={() => setShowModal(1)}>1</Button>
        <Button onClick={() => setShowModal(2)}>2</Button>
        <Button onClick={() => setShowModal(3)}>3</Button>
        <Button onClick={() => setShowModal(4)}>4</Button>
      </Buttons>
    </div>
  )
}

export default App
