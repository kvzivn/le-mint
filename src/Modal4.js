import { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import ParticleEffectButton from "react-particle-effect-button"
import Confetti from "react-confetti"
import useWindowSize from "./useWindowSize"
import coverVideo from "./media/cover.mp4"
import CloseIcon from "./CloseIcon"

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
  background-color: white;
`

const Heading = styled.h2`
  margin-top: 15px;
  margin-bottom: 35px;
  font-family: Georgia;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: 0.02em;
  text-align: center;
  opacity: ${({ success }) => (success ? 0 : 1)};
  transition: opacity: .25s ease-in-out;
`

const pulse = keyframes`
  0% { opacity: 1; }
  25% { opacity: 0; }
  50% { opacity: 0; }
  75% { opacity: 0; }
  100% { opacity: 1; }
`

const Text = styled.p`
  position: absolute;
  bottom: 119px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 35px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  animation: ${({ success }) => (success ? pulse : undefined)} 4s forwards;
  opacity: 0;
  transition: opacity 0.75s ease-in-out;
  transition-delay: 1s;
  z-index: 6;
`

const Desc = styled.div`
  margin-top: 4px;
  font-size: 18px;
  font-weight: 600;
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
  transition-delay: 2s;
  z-index: 1;
`

const print = keyframes`
  0% { transform: translateY(0); }
  5% { transform: translateY(0); }
  10% { transform: translateY(0); }
  15% { transform: translateY(-15%); }
  20% { transform: translateY(-15%); }
  25% { transform: translateY(-30%); }
  45% { transform: translateY(-30%); }
  50% { transform: translateY(-50%); }
  75% { transform: translateY(-75%); }
  80% { transform: translateY(-75%); }
  85% { transform: translateY(-75%); }
  90% { transform: translateY(-75%); }
  95% { transform: translateY(-75%); }
  100% { transform: translateY(-100%); }
`

const Video = styled.video`
  position: absolute;
  top: 456px;
  width: ${({ success }) => (success ? "340px" : "280px")};
  z-index: 2;
  animation: ${print} 5s forwards ease-in;
  animation-delay: 4s;
  transition: width 0.35s ease-in-out;
`

const SpinnerContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ loading }) => (loading ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
  transition-delay: 0.5s;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 56px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 3;
`

const Button = styled.button`
  cursor: pointer;
`

const Info = styled.div`
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  transition: opacity 0.25s ease-in-out;
  visibility: ${({ success }) => (success ? "hidden" : "visible")};
`

const Divider = styled.div`
  position: absolute;
  bottom: ${({ loading }) => (loading ? "202px" : "152px")};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ loading }) => (loading ? "400px" : "478px")};
  height: ${({ loading }) => (loading ? "3px" : "1px")};
  opacity: ${({ success }) => (success ? 0 : 1)};
  background-color: #e5e5e5;
  transition: all 1s ease-in-out;
  transition-delay: 0.5s;
  z-index: 4;
`

const Overflow = styled.div`
  position: absolute;
  bottom: ${({ loading }) => (loading ? "202px" : "152px")};
  transform: translateY(100%);
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
`

const Modal1 = ({ setShowModal }) => {
  const { width, height } = useWindowSize()
  const videoRef = useRef()
  const textRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [buttonSuccess, setButtonSuccess] = useState(false)
  const [complete, setComplete] = useState(false)

  const init = () => {
    setLoading(true)

    setTimeout(() => {
      textRef.current.style.opacity = 1
    }, 1000)

    setTimeout(() => {
      videoRef.current.play()
      setSuccess(true)
      setButtonSuccess(true)
    }, 8500)

    setTimeout(() => {
      setButtonSuccess(false)
      setComplete(true)
    }, 11500)
  }

  return (
    <Modal loading={loading}>
      <Container>
        <CloseIcon onClick={() => setShowModal(false)} />

        <VideoContainer loading={loading}>
          <Heading success={success}>Minting...</Heading>
          <Video
            loading={loading}
            success={success}
            muted
            preload="auto"
            loop="1"
            playsInline="1"
            src={coverVideo}
            ref={videoRef}
          />
        </VideoContainer>

        <Info loading={loading} success={success}>
          <h1>Mint #4</h1>

          <p>
            You are about to mint <span>Redlion Gazette #34</span>
            <br />
            for <span>0.05 ETH</span> / edition
          </p>

          <div className="input">
            <input type="text" placeholder="1" />
            <p>
              Enter number of editions.
              <br />
              <span>158 / 200 available</span>
            </p>
          </div>

          <p className="price">
            <span>Total</span>
            <span>0.05 ETH</span>
          </p>
        </Info>
      </Container>

      <Overflow loading={loading} />

      <Text ref={textRef} success={success} loading={loading}>
        {complete ? "Congratulations!" : "Redlion Gazette #34"}
      </Text>

      <ButtonContainer loading={loading}>
        <ParticleEffectButton color="#c91534" hidden={buttonSuccess}>
          <Button
            loading={loading}
            complete={complete}
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
            onClick={() => (complete ? setShowModal(false) : init())}
          >
            {loading || success
              ? complete
                ? "View transaction"
                : "Transaction pending..."
              : "Mint"}
          </Button>
        </ParticleEffectButton>
      </ButtonContainer>

      <Divider loading={loading} success={success} />

      {complete && <Confetti width={width} height={height} />}
    </Modal>
  )
}

export default Modal1
