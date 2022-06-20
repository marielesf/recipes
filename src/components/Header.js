import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 1.5vw;
    padding:0;
    background-color:	#BC8F8F;
   
  
   
    
  }`;


export default function Header(){
  return(
    <>
    

<body>
    <header>
       
        <div>
          
        <GlobalStyle />
        
       
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

    </>
  )

}
