import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = props => (
    <div className={classes.Controls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl  
                key={ctrl.label}
                label={ctrl.label} 
                added={() => props.addIngredients(ctrl.type)}
                reduced={() => props.reduceIngredients(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.Orders}
            disabled={!props.purchasable}
            onClick={props.ordered}>Check Out</button>
    </div>
)

export default buildControls;