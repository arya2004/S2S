import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import {toggleCart, removeItem, incrementItem, decrementItem} from '../store/slices/cartSlice';


const Cart = () => {
    const {isCartOpen, cartItems} = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);


    // closing the Cart on clicking outside of it

    // useEffect(() => {
    //     const outsideClose = (e) => {
    //         if (e.target.id === 'cart') {
    //             handleCloseCart(false);
    //         }
    //     };

    //     window.addEventListener('click', outsideClose);

    //     return () => {
    //         window.removeEventListener('click', outsideClose);
    //     };
    // }, [handleCloseCart]);

    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
}
