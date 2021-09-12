import { useState } from "react"
import styled, { keyframes } from "styled-components"
import Confetti from "react-confetti"
import useWindowSize from "./useWindowSize"
import coverVideo from "./media/cover.mp4"
import CloseIcon from "./CloseIcon"
import Checkmark from "./Checkmark"
import Info from "./Info"

import "animate.css"

const Modal = styled.div`
  position: absolute;
  width: 650px;
  height: ${({ success }) => (success ? "720px" : "560px")};
  margin: 0 auto;
  border: 2px solid #eaeaea;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: height 1.5s ease-in-out;
  transition-delay: 0.5s;
  overflow: hidden;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 84px;
`

const Heading = styled.h2`
  margin-top: 15px;
  margin-bottom: 35px;
  font-family: Georgia;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: 0.02em;
  text-align: center;
`

const Text = styled.p`
  margin-top: 35px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-align: center;
`

const VideoContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  opacity: ${({ success }) => (success ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  transition-delay: 2.25s;
  pointer-events: none;
`

const Video = styled.video`
  width: 280px;

  animation: ${({ success }) => (success ? "tada" : undefined)};
  animation-duration: 0.85s;
  animation-delay: 2.65s;
  z-index: 2;
`

const SpinnerContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translateX(-50%);
`

const Spin = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const Spinner = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: #ef2548;
  animation: ${Spin} 1s infinite ease-in;
`

const Button = styled.button`
  position: absolute;
  bottom: 56px;
  transform: translateX(-50%);
  left: 50%;
  width: 478px;
  height: 52px;
  background: ${({ loading }) =>
    loading ? "#F2F2F2" : "linear-gradient(180deg, #ef2548 0%, #c91534 100%)"};
  border: 1px solid;
  border-color: ${({ loading }) => (loading ? "#fafafa" : "#F2F2F2")};
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ loading }) => (loading ? "#141414" : "white")};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  cursor: ${({ loading }) => (loading ? "select" : "pointer")};
  transition: all 0.15s ease-in-out;
`

const Modal1 = ({ setShowModal }) => {
  const { width, height } = useWindowSize()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [buttonSuccess, setButtonSuccess] = useState(false)

  const init = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 4000)

    setTimeout(() => {
      setButtonSuccess(true)
    }, 6000)
  }

  return (
    <Modal success={success}>
      <Container>
        <CloseIcon onClick={() => setShowModal(false)} />

        <VideoContainer success={success}>
          <Heading>Congratulations!</Heading>
          <Video
            success={success}
            muted
            preload="auto"
            loop="1"
            playsInline="1"
            autoPlay="1"
            src={coverVideo}
          />

          <Text>You just minted issue #34</Text>
        </VideoContainer>

        <Info success={success} loading={loading} number={1} />
      </Container>

      {loading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}

      {success && <Checkmark buttonSuccess={buttonSuccess} />}

      {buttonSuccess ? (
        <Button onClick={() => setShowModal(false)}>View transaction</Button>
      ) : (
        <Button loading={loading || success} onClick={() => init()}>
          {loading || success ? "Minting..." : "Mint"}
        </Button>
      )}

      {buttonSuccess && <Confetti width={width} height={height} />}
    </Modal>
  )
}

export default Modal1
