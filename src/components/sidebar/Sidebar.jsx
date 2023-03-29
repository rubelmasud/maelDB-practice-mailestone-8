import React from 'react';

const Sidebar = (props) => {
    return (
        <div className='sticky top-0'>
            <h2 className='text-2xl font-semibold font-mono text-center mb-6 '>Meals Name:</h2>
            <p className='text-sm font-semibold px-3'>
                <ul>
                    <li>{props.cart}</li>
                </ul>
            </p>
        </div>
    );
};

export default Sidebar;