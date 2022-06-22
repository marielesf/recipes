import React from "react";
import { createGlobalStyle } from "styled-components";
import imgHeader from "../img receitas/imgHeader.png"
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }`;

const ParteHeader  = styled.div`
  
    padding-top:15px;
    width:100%;
    height:100vh;
    background-image:url(${imgHeader});
    background-size:contain;

   
   
        
ul{
    list-style:none;
    display: flex;
}
li{
    margin:0 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav{
    display: flex;
    justify-content: space-between;
    margin:10px 30px;
}
h1{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:3.7em;
    font-size:3.5em;
    letter-spacing: 15.75px;
    color: #373737;
    opacity: 1;
    font-family: Arial, Helvetica, sans-serif;
}
h2{
font-size:30px;
color: #373737;
font-family:Arial, Helvetica, sans-serif;
}

`;
export default function Header(){
  return(
    <>
    <GlobalStyle/>
    <ParteHeader>
    

<body>
    <header>
       
        <div>
          
        
        
        {/* <div>
            {" "}
            <img src={imgHeader} alt="imgHeader" />
          </div> */}
        <nav>
            <h2>RC</h2>
           <ul>
                <li>About</li>
                <li>Recipes</li>
                <li>subscribs</li>
            </ul>
        </nav>
        <h1>RECIPES</h1>
        </div>
    </header>
    
</body>
</ParteHeader>
    </>
  )

}
