import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import facebookIcon from "../img receitas/Facebook Ellipse.svg";
import instaIcon from "../img receitas/Instagram Ellipse.svg";
import pinterestIcon from "../img receitas/Pinterest Ellipse.svg";
import twitterIcon from "../img receitas/Twitter ellipse.svg";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

const FooterLink = styled.ul`
  float: left;
  font-size: "14px";
  display: flex;
  padding-top: 0;
  padding-left: 100px;
  text-decoration: none;
  list-style-type: none;
  width: 50%;
  height: 35vh;
  text-align: center;
  justify-content: space-evenly;
  color: black;
  top: 0px;
  left: 0px;
  background: #f2f4f1 0% 0% no-repeat padding-box;
  opacity: 1;
  flex-direction: row;
  align-items: center;
`;

const Rodape = styled.div`
  left: 0px;
  width: 100%;
  background: #446061 0% 0% no-repeat padding-box;
  text-align: center;
  font: normal normal normal 16px/32px Roboto;
  letter-spacing: 1.68px;
  color: #ffffff;
  opacity: 0.5;
`;

function Footer() {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <GlobalStyle />
      <p>FOOOOOOOOOOOOOOOOOOOter</p>
      <FooterLink>
        <img src={instaIcon} alt="Insta Icon" />
        <img src={twitterIcon} alt="Twiter Icon" />
        <img src={facebookIcon} alt="facebook Icon" />
        <img src={pinterestIcon} alt="Pinterest Icon" />
      </FooterLink>
      <FooterLink>
        <li>About</li>
        <li>Recipes</li>
        <li>subscribs</li>
      </FooterLink>

      <Rodape>
        <p>
          Trabalho colaborativo VNW. Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </Rodape>
    </>
  );
}

export default Footer;
