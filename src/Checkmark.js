import styled from "styled-components"
import "./checkmark.css"

const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: ${({ buttonSuccess }) => (buttonSuccess ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`

const Checkmark = ({ buttonSuccess }) => {
  return (
    <Wrapper buttonSuccess={buttonSuccess}>
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Checkmark
