import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItems.module.css';

const MealItem = props =>{
    const price = `$${props.price.toFixed(2)}`;

    return(
     <li className={classes.mealitem}>
        <div >
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div><MealItemForm/></div>
    </li>
    );
};

export default MealItem;