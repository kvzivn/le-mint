import { useState } from "react"
import styled from "styled-components"
import coverVideo from "./media/cover.mp4"
import CloseIcon from "./CloseIcon"
import Info from "./Info"

const Modal = styled.div`
  position: absolute;
  width: 650px;
  height: ${({ minting }) => (minting ? "620px" : "560px")};
  margin: 0 auto;
  border: 2px solid #eaeaea;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: height 1s ease-out;
  transition-delay: 0.5s;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 84px;
`

const Video = styled.video`
  position: absolute;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 292px;
  margin: 0 auto;
  opacity: ${({ minting }) => (minting ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  transition-delay: 2s;
`

const Button = styled.button`
  position: absolute;
  bottom: 56px;
  transform: translateX(-50%);
  left: 50%;
  width: 478px;
  height: 52px;
  background: ${({ minting }) =>
    minting ? "#ccc" : "linear-gradient(180deg, #ef2548 0%, #c91534 100%)"};
  border: 1px solid #a1a1a1;
  box-sizing: border-box;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
`

const Modal1 = ({ setShowModal }) => {
  const [minting, setMinting] = useState(false)

  return (
    <Modal minting={minting}>
      <Container>
        <CloseIcon onClick={() => setShowModal(false)} />

        <Video
          minting={minting}
          muted
          preload="auto"
          loop="1"
          playsInline="1"
          autoPlay="1"
          poster="https://images.ctfassets.net/znxnw90vc5ew/1sg43cMTB5Vg17M63kxhT0/5e4005963c5d66d0171d3d2ecedea96e/cover34_poster.jpg?fm=jpg&fl=progressive&w=500"
          src={coverVideo}
        />

        <Info minting={minting} number={3} />
      </Container>

      <Button minting={minting} onClick={() => setMinting(true)}>
        {minting ? "Minting" : "Mint"}
      </Button>
    </Modal>
  )
}

export default Modal1
