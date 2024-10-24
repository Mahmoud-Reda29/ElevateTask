// src/components/AddToCartButton/AddToCartButton.jsx
import React from 'react';

const AddToCartButton = ({ itemId, withTransition = true, customClassName = '', onClick = () => {} }) => {
    return (
        <button
            className={`w-full bg-green-500 text-white py-2 rounded-md ${customClassName}
                ${withTransition ? 'transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0' : ''}`}
            onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                onClick(e); // Allow custom click handler
            }}
        >
            Add To Cart
        </button>
    );
};


export const AddToCartButtonWithTransition = (props) => (
    <AddToCartButton {...props} withTransition={true} />
);

export const AddToCartButtonWithoutTransition = (props) => (
    <AddToCartButton {...props} withTransition={false} />
);

export const AddToCartButtonStyled = (props) => (
    <AddToCartButton
        {...props}
        withTransition={false}
        customClassName="w-1/4 ml-5 py-2 px-4 border border-green-500 text-green-500 rounded"
    />
);

export default AddToCartButton;
