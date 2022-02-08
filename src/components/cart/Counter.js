import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonGroup } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { addToCart, changeCartCount } from "../../store/products"
import { prodata } from '../../data/prodata'


export default function Counter({ count }) {
    const history = useRouter()
    const dispatch = useDispatch();
    const [value, setValue] = useState(0)
    const { product, cart } = useSelector(state => state.products)
    const { id, title, price, quantity } = product[0]

    // console.log("cart? " + cart);

    const handleIncrement = () => {
        setValue(Math.min(Number(quantity), Number(value) + 1))
    }
    const handleDecrement = () => {
        setValue(Math.max(0, Number(value) - 1))
    }

    const handleAddToCart = () => {
        const product = cart.find(i => i.id === id)
        if (product) {
            alert("Product is already added to cart")
            return
        }
        const data = {
            id,
            price,
            quantity,
            totalPrice: value * price,
            count: value
        }
        dispatch(addToCart(data))
        setValue(0)
        history.push("/cart")
    }
    return (
        <>
            <ButtonGroup style={{ maxWidth: "150px" }} className='mb-4 d-flex' size="sm" aria-label="Basic example">
                <Button onClick={handleDecrement} variant="outline-primary">-</Button>
                <Button as="div" variant="outline-primary">value:{value}</Button>
                <Button onClick={handleIncrement} variant="outline-primary">+</Button>
            </ButtonGroup>
            {value > 0 && <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>}
        </>
    )
}
