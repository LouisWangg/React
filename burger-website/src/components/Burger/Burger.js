import React from 'react';

import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = props => {
    // change object of Ingredients in Builder.js into array 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
                return <Ingredients key={ingredientsKey + i} type={ingredientsKey} />
            });
        })
        //combine the arrays into one array
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [] );
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please put in the ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredients type="top-bread" />
            {transformedIngredients}
            <Ingredients type='bottom-bread' />
        </div>
    )
}

export default burger;