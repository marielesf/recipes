import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import colher from "../img receitas/pexels-karolina-grabowska-4199094@2x.png";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .button1 {
    font-family: Verdana, Arial, Helvetica, sans-serif; 
    font-size: 12px; 
    font-weight: bold; 
    border: 6px solid #373737;
    top: 4304px;
    left: 834px;
    width: 240px;
    height: 60px;
    }

    .input1 {
      margin: 25px;
    top: 4144px;
    left: 557px;
    width: 600px;
    height: 60px;
    background: #EFF1EE 0% 0% no-repeat padding-box;
    }

    .img1 {
      width: 100%;
      height: 100%;
    }

    p{
      width: 60%;
      text-align: center;

    }
  `;
const Container = styled.div`
  width: 100%;
  height: 70vh;
`;
const AboutHalf = styled.div`
  background: #eff1ee 0% 0% no-repeat padding-box;
  float: left;
  font-size: "14px";
  display: flex;
  width: 50%;
  height: 100%;
  text-align: center;
  justify-content: space-evenly;
  color: black;
  flex-direction: row;
  align-items: center;
`;

const SubscribeStyle = styled.div`
  left: 0px;
  width: 100%;
  height: 40vh;
  text-align: center;
  font: normal normal normal 16px/32px Roboto;
  letter-spacing: 1.68px;
  padding-top: 50px;
  background: #dfe4de 0% 0% no-repeat padding-box;
  opacity: 1;
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AboutHalf>
          <img src={colher} alt="Colher com sal rosa" className="img1" />
        </AboutHalf>
        <AboutHalf>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </p>
        </AboutHalf>
      </Container>
      <SubscribeStyle>
        <h2>SUBSCRIBE</h2>
        <h3>Sign up for newsletter</h3>
        <input placeholder="Your Email" className="input1"></input>
        <br />
        <button class="button1">SUBMIT</button>
      </SubscribeStyle>
    </>
  );
}

export default Main;
