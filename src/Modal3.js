import { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import ParticleEffectButton from "react-particle-effect-button"
import Confetti from "react-confetti"
import useWindowSize from "./useWindowSize"
import coverVideo from "./media/cover.mp4"
import CloseIcon from "./CloseIcon"
import Sparkles from "./Sparkles"
import Info from "./Info"
import "./spinner3.css"

const Modal = styled.div`
  position: absolute;
  width: 650px;
  height: ${({ loading }) => (loading ? "720px" : "560px")};
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
  position: absolute;
  bottom: -48px;
  margin-top: 35px;
  font-size: 22px;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-align: center;
  color: black;
`

const VideoContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${({ loading }) => (loading ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  transition-delay: 2.25s;
`

const Video = styled.video`
  position: absolute;
  top: ${({ complete }) => (complete ? "40px" : "90px")};
  width: ${({ complete }) => (complete ? "320px" : "280px")};
  filter: ${({ success }) => (success ? "grayscale(0)" : "grayscale(1)")};
  transition: all 0.75s ease-in-out;
`

const BoxShadow = styled.div`
  position: absolute;
  top: ${({ complete }) => (complete ? "40px" : "90px")};
  width: ${({ complete }) => (complete ? "320px" : "280px")};
  height: ${({ complete }) => (complete ? "414px" : "362px")};
  box-shadow: ${({ success }) =>
    success
      ? "0 0 0 0px inset, 0 0 5px grey, 0 0 10px grey inset"
      : "0 0 0 150px inset, 0 0 5px grey"};
  color: rgb(255 255 255 / 0.75);
  transition: all 0.75s ease-in-out;
`

const SpinnerContainer = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateX(-50%);
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
  const videoRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [complete, setComplete] = useState(false)

  const init = () => {
    setLoading(true)

    setTimeout(() => {
      setSuccess(true)
    }, 7500)

    setTimeout(() => {
      videoRef.current.play()
      setComplete(true)
    }, 8250)
  }

  return (
    <Modal loading={loading}>
      <Container>
        <CloseIcon onClick={() => setShowModal(false)} />

        <VideoContainer loading={loading}>
          {!success && <Heading>Minting...</Heading>}
          <Video
            success={success}
            complete={complete}
            muted
            preload="auto"
            loop="1"
            playsInline="1"
            src={coverVideo}
            ref={videoRef}
          />

          {!success && (
            <SpinnerContainer>
              <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </SpinnerContainer>
          )}

          <BoxShadow success={success} complete={complete} />

          <Text>
            {complete
              ? "Gazette #34 is yours. Congratulations!"
              : "Redlion Gazette #34"}
          </Text>
        </VideoContainer>

        <Info success={success} loading={loading} number={3} />
      </Container>

      {complete ? (
        <Button onClick={() => setShowModal(false)}>View transaction</Button>
      ) : (
        <Button loading={loading || success} onClick={() => init()}>
          {loading || success ? "Transaction pending" : "Mint"}
        </Button>
      )}

      {success && <Confetti width={width} height={height} />}
    </Modal>
  )
}

export default Modal1
