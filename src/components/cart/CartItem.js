import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import { changeCartCount, removeItemFromCart } from "../../store/products"
import Counter from './Counter'
const CartItem = ({ id, count, image, name, quantity, price, totalPrice }) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState(count)

    useEffect(() => {
        dispatch(changeCartCount({
            id,
            value
        }))
    }, [value, dispatch, id])
    const handleIncrement = () => {
        setValue(Math.min(Number(quantity), Number(value) + 1))
    }
    const handleDecrement = () => {
        setValue(Math.max(1, Number(value) - 1))
    }
    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <Row className="d-flex align-items-center">
            <Col md={3}>
                <img src={image} width="120" height="120" alt="" />
            </Col>
            <Col md={7}>
                <p className='mb-0 font-weight-bold'>{name}</p>
                <p className='mb-0'>Quantity: {count}</p>
                <p className='mb-2'>Total: {count} X {price} = {totalPrice}</p>
                {/* <div>
                    <button onClick={handleDecrement} className="btn mx-1 btn-danger">-</button>
                    <span className="mx-3">{count}</span>
                    <button onClick={handleIncrement} className="btn mx-1 btn-success">+</button>
                </div> */}
                <ButtonGroup style={{ maxWidth: "150px" }} className='mb-4 d-flex' size="sm" aria-label="Basic example">
                    <Button onClick={handleDecrement} variant="outline-primary">-</Button>
                    <Button as="div" variant="outline-primary">value:{value}</Button>
                    <Button onClick={handleIncrement} variant="outline-primary">+</Button>
                </ButtonGroup>
            </Col>
            <Col md={1}>
                <Button onClick={handleRemoveItem} className="btn btn-danger">
                    delete
                </Button>
            </Col>
        </Row>
    )
}

export default CartItem
