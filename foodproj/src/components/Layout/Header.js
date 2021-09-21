import React from 'react';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
const Header = props =>{
    return <div>
    <header className={classes.header}>
        <h1>Reactive Meals</h1>
        <HeaderCart />
    </header>
    <div className={classes['main-image']}>
        <img src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" alt='delicious food'/>
    </div>
    </div>
};

export default Header;