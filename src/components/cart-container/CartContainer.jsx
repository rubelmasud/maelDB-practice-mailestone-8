import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import SingleCart from '../single-cart/SingleCart';

const CartContainer = () => {

    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleAddToCart = (name) => {
        const newCart = [...cart, name, <br></br>]
        setCart(newCart)
    }

    return (
        <div className='main-body w-full md:flex  px-6'>
            <div className="cart md:w-10/12 grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 mr-2">
                {
                    meals.map(meal => <SingleCart
                        meal={meal}
                        key={meal.idMeal}
                        handleAddToCart={handleAddToCart}
                    ></SingleCart>)
                }

            </div>
            <div className="sidebar md:w-3/12 row-cols-3 shadow-xl bg-gray-100 my-3 rounded  ">
                <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default CartContainer;