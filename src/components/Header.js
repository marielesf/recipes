import React from "react";
//import { createGlobalStyle } from "styled-components";
//import imgHeader from "../img receitas/imageHeader.png";
import styled from "styled-components";

/*const GlobalStyle = createGlobalStyle`
  *{
    margin: 1.5vw;
    padding:0;
    background-color:	#BC8F8F;
   
  
   
    
  }`;
*/
const ParteHeader  = styled.div`
    background-color:grey;

    background-size: 100% 100%;
    padding-top:15px;
    width:100vw;
    height:100vh;
   
   
        
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
    <ParteHeader>
    

<body>
    <header>
       
        <div>
          
        {/* <GlobalStyle /> */}
        
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
