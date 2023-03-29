import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const SingleCart = (props) => {

    const { idMeal, strMeal, strMealThumb, strYoutube } = props.meal
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='border rounded my-6 p-3 bg-gray-100 relative'>
            <img className='p-1 rounded-xl origin-center hover:origin-top' src={strMealThumb} alt="" />
            <div className="meal-info text-stone-800">
                <h3 className='text-xl font-semibold font-mono my-2'>{strMeal}</h3>
                <p>Meals Id:{idMeal}</p>
                <p>Youtube link:{strYoutube}</p>
            </div>
            <button onClick={() => handleAddToCart(strMeal)} className='bg-orange-600 hover:bg-gray-500 text-white font-mono font-semibold w-11/12 rounded py-1 absolute bottom-0 '>
                Add to Cart
                <FontAwesomeIcon className='text-gray-200' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default SingleCart;