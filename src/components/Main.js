import React from "react";
import { createGlobalStyle } from "styled-components";
import pizza from "../img receitas/pizza.png"
import cake from "../img receitas/cake.png"
import smoothie from "../img receitas/smoothie.png"
import styled from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }
  
  .foto {
    width: 30%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
   
  }


  `;


 const RecipesContainer = styled.section`
    display: flex;
    margin:15px;
    width:100%;
    justify-content: space-around;

   
 
    
`
const RecipeCardContainer = styled.article`
    width: 24vw;
    height:10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

   
 
    
   
   
`  
const RecipeTitle = styled.h2`
display: flex;
justify-content: center;
align-item:center;



`
const LastRecipe = styled.div`
    height: 100vh;
    
    background-color:#F2F4F1;
    margin-top:10px;
    padding-top:100px;


`

const CardWhite = styled.div`
background-color:white;

height:200px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-item:center;

`



function Main() {
  return (
    <>
    <LastRecipe>
      <RecipeTitle>Latest Recipes</RecipeTitle>
      <RecipesContainer >
     
   
      <RecipeCardContainer>
        <img src={cake} alt="cake" className="foto" />

        <CardWhite>
         <h3>Red Cake</h3>
        </CardWhite>
      </RecipeCardContainer>

      <RecipeCardContainer>
        <img src={pizza} alt="pizza" className="foto" />

        <CardWhite>
         <h3>Margherita pizza</h3>
        </CardWhite>
      </RecipeCardContainer>

      <RecipeCardContainer>
        <img src={smoothie} alt="smoothie" className="foto" />

        <CardWhite>
         <h3>Peanut smoothie</h3>
        </CardWhite>
      </RecipeCardContainer>
       
      </RecipesContainer >
      </LastRecipe>
    </>
  );
}

export default Main;

