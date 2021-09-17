import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//global ingredients are written with full of capital characters
//item's price are made in dollars
const INGREDIENTS_PRICE = {
    bacon: 0.8,
    cheese: 0.6,
    salad: 0.4,
    meat: 1.5
}

class Builder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            salad: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        ordered: false
    }

    orderItemsHandler = ingredients => {
        const quantityIngredients = Object.keys(ingredients)
            //igKey are cheese, salad, bacon, meat
            //ingredients[igKey] are the value of each igKey
            .map(igKey => {
                return ingredients[igKey];
            })
            //to sum the number from each array (salad, meat, bacon, cheese)
            .reduce((sum, el) => {
                return sum + el
            }, 0);

        this.setState({purchasable: quantityIngredients > 0});
    }

    addIngredientsHandler = type => {
        const oldQuantity = this.state.ingredients[type];
        const addedQuantity = oldQuantity + 1;
        const updatedQuantity = {
            ...this.state.ingredients
        };
        updatedQuantity[type] = addedQuantity;

        const oldPrice = this.state.totalPrice;
        const addPrice = INGREDIENTS_PRICE[type];
        const updatedPrice = oldPrice + addPrice;

        this.setState({ingredients: updatedQuantity, totalPrice: updatedPrice});
        this.orderItemsHandler(updatedQuantity);
    }

    reduceIngredientsHandler = type => {
        const oldQuantity = this.state.ingredients[type];
        if (oldQuantity <= 0) {
            return
        };

        const reducedQuantity = oldQuantity - 1;
        const updatedQuantity = {
            ...this.state.ingredients
        };
        updatedQuantity[type] = reducedQuantity;

        const oldPrice = this.state.totalPrice;
        const deductPrice = INGREDIENTS_PRICE[type];
        const updatedPrice = oldPrice - deductPrice;

        this.setState({ingredients: updatedQuantity, totalPrice: updatedPrice});
        this.orderItemsHandler(updatedQuantity);
    }

    orderedHandler = () => {
        this.setState({ordered: true});
    }

    continueOrderedHandler = () => {
        alert('You continued the process');
    }
    
    cancelOrderedHandler = () => {
        this.setState({ordered: false});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        //will return true or false by checking the value of each key (cheese, salad, etc)
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.ordered} canceled={this.cancelOrderedHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        continueOrder={this.continueOrderedHandler}
                        cancelOrder={this.cancelOrderedHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredients={this.addIngredientsHandler}
                    reduceIngredients={this.reduceIngredientsHandler} 
                    disabled={disabledInfo} 
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.orderedHandler} />
            </Aux>
        )
    }
}

export default Builder;