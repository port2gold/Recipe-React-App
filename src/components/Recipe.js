import React from 'react';
import style from './recipe.module.css';


const Recipe =({title, calories, image, ingredients})=> {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Ingredients</h3>
            <div className= {style.imageText}>
            <div className = {style.text}>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ) )}
            </ol>
            </div>
            <img className={style.image} src={image} alt=""/>

            </div>
            
            
            <p><strong>Calories</strong>: {calories}</p>
        </div>
    );
}

export default Recipe;