import { useState } from "react"
import styled, { keyframes } from "styled-components"
import ParticleEffectButton from "react-particle-effect-button"
import coverVideo from "./media/cover.mp4"
import CloseIcon from "./CloseIcon"
import Checkmark from "./Checkmark"
import Info from "./Info"
import "./spinner2.css"

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
  font-weight: 400;
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
  animation: ${({ success }) => (success ? "fadeInRight" : undefined)};
  animation-duration: 1.25s;
  animation-delay: 2.5s;
  opacity: ${({ success }) => (success ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  transition-delay: 2.5s;
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 56px;
  transform: translateX(-50%);
  left: 50%;
`

const Button = styled.button`
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
`

const Modal1 = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [buttonSuccess, setButtonSuccess] = useState(false)
  const [buttonTextSuccess, setButtonTextSuccess] = useState(false)

  const init = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setButtonSuccess(true)
    }, 4000)

    setTimeout(() => {
      setButtonSuccess(false)
      setButtonTextSuccess(true)
    }, 7000)
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

        <Info success={success} loading={loading} number={2} />
      </Container>

      {loading && (
        <SpinnerContainer>
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </SpinnerContainer>
      )}

      <ButtonContainer loading={loading}>
        <ParticleEffectButton color="#c91534" hidden={buttonSuccess}>
          <Button
            loading={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "478px",
              height: "52px",
              background: "linear-gradient(180deg, #ef2548 0%, #c91534 100%)",
              border: "1px solid",
              borderColor: "#F2F2F2",
              borderRadius: "6px",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
            onClick={() => (buttonTextSuccess ? setShowModal(false) : init())}
          >
            {loading || success
              ? buttonTextSuccess
                ? "View transaction"
                : "Minting..."
              : "Mint"}
          </Button>
        </ParticleEffectButton>
      </ButtonContainer>
    </Modal>
  )
}

export default Modal1
