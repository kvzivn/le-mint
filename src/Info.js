import React from "react"
import styled from "styled-components"

const Info = styled.div`
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  transition: opacity 0.25s ease-in-out;
  background-color: white;
  visibility: ${({ success }) => (success ? "hidden" : "visible")};
`

export default ({ loading, success, number }) => {
  return (
    <Info loading={loading} success={success}>
      <h1>Mint #{number}</h1>

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

      <div className="hr" />
      <p className="price">
        <span>Total</span>
        <span>0.05 ETH</span>
      </p>
    </Info>
  )
}
