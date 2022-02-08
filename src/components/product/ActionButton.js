import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ButtonGroup, Button, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import products, { addToCart } from '../../store/products';

export default function ActionButton() {
    const history = useRouter()
    const dispatch = useDispatch();
    const [value, setValue] = useState(0)

    const { product, cart } = useSelector(state => state.products)
    const { id, image, name, price, quantity } = product[1]

    console.log("cart? " + cart);

    const handleIncrement = () => {
        setValue(Math.min(Number(quantity), Number(value) + 1))
    }

    const handleAddToCart = () => {
        const product = cart.find(i => i.id === id)
        if (product) {
            alert("Product is already added to cart")
            return
        }
        const data = {
            id,
            image,
            name,
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
        <ButtonGroup aria-label="Basic example">
            <Button variant="link" className="btn-favorite p-0" href="#">
                <i style={{ fontSize: "18px" }}
                    className="icon-surface1-41 pe-3" />
            </Button>
            <Button onClick={handleAddToCart} variant="link" className="btn-cart p-0" href="#">
                <i className="icon-surface1-36" style={{ fontSize: "20px" }} /><Badge className='position-absolute' style={{ right: "-10px", top: "-10px" }}>{value}</Badge>
            </Button>
        </ButtonGroup>
    )
}
