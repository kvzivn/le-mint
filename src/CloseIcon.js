import styled from "styled-components"

const CloseIcon = styled.svg`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`

export default ({ onClick }) => (
  <CloseIcon
    className="close"
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/CloseIcon"
    onClick={onClick}
  >
    <path
      d="M20.5 18.4375C21.0625 19.0625 21.0625 20 20.5 20.5625C19.875 21.1875 18.9375 21.1875 18.375 20.5625L11 13.125L3.5625 20.5625C2.9375 21.1875 2 21.1875 1.4375 20.5625C0.8125 20 0.8125 19.0625 1.4375 18.4375L8.875 11L1.4375 3.5625C0.8125 2.9375 0.8125 2 1.4375 1.4375C2 0.8125 2.9375 0.8125 3.5 1.4375L11 8.9375L18.4375 1.5C19 0.875 19.9375 0.875 20.5 1.5C21.125 2.0625 21.125 3 20.5 3.625L13.0625 11L20.5 18.4375Z"
      fill="#141414"
    />
  </CloseIcon>
)
