import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                 <li key={igKey}> 
                    {/* double curly braces, the outer are for dynamic entry and the inner are for javascript objects */}
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> = {props.ingredients[igKey]}
                </li>
            )
        })
    
    return (
        <Aux>
            <h3>Your Orders</h3>
            <p>List of ingredients inside the burger :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
            <p>Ready to checkout?</p>
            <Button buttonStyle="Success" clicked={props.continueOrder}>Continue</Button>
            <Button buttonStyle="Danger" clicked={props.cancelOrder}>Cancel</Button>
        </Aux>
    )
}

export default orderSummary;